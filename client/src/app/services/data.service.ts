import { Injectable } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import CartProduct from '../models/CartProduct.model';
import Product from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user: any = {status: -1}
  public mainData: {products:number, orders:number} = {products:0, orders:0}
  public categories: any[] = []
  public products: Product[] = []
  public itemsToShow:any
  public cartData: any
  public cart: any
  public sum: number
  public lastOrder: any = []
  public lastCart: CartProduct[] =[]
  // if there's an error on registration data' it'll be TRUE. if its OK it'll FALSE.
  public regErrors = {id: false, username: false, password: false} 
  public titleMessage:string = ""
  public btnMessage:string = "Start Shopping"
  public maintab:MatTable<any>
  public dataSource = []
  public registerResult = false;

  public async ifIdExist (id:number) {
    try {
      // const res = await fetch(`http://localhost:1001/login/ifidexists`, {
      const res = await fetch(`https://online-shop-bakery.herokuapp.com/login/ifidexists`, {
        method: 'GET',
        headers: {
          id:JSON.stringify(id)
        },
      });
      const result = await res.json()
      console.log(result);
      this.regErrors.id = result
      // if both results are true, pass on to registration
      // otherwise, show relevant message
    } catch (error) {
      console.log(error);
    }
  }

  public async ifUsernameExist (username:string) {
    try {
      const res = await fetch(`https://online-shop-bakery.herokuapp.com/login/ifusernameexists`, {
        method: 'GET',
        headers: {
          username:username
        },
      });
      const result = await res.json()
      console.log("email:",result);
      this.regErrors.username = result

      // if both results are true, pass on to registration
      // otherwise, show relevant message

    } catch (error) {
      console.log(error);
    }
  }

  public passwordSetter (password1:string,password2:string) {
      if (password1 === password2) {
        this.regErrors.password = false
      } else {
        this.regErrors.password = true
      }
      console.log(this.regErrors.password)
  } 

  public async register(id:number,
                        username:string,
                        password:string,
                        fname:string,
                        lname:string,
                        city:string,
                        street:string) {
    this.registerResult = undefined
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/login/reg', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id,
          fname,
          lname,
          username,
          password,
          city,
          street}),
      });
      this.registerResult = res.status <= 201

    } catch (error) {
      console.log(error);
    }
  }

  public returnToLogin  () {
    this._r.navigateByUrl("login")
  }

  public gotoRegister() {
    this._r.navigateByUrl("register")
  }
  public gotoStore() {
    this.shopMainData()
  }
  public async login (username, password) {
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/login/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username,password}),
      });
      if (res.status < 400) {
        const data = await res.json()
        localStorage.token = data.token
        this.user = data.userData 
        this.user.status = data.userStatus
        
        switch (data.userStatus) {
          case 2:
            this.cart = data.cart
            console.log("now cart is",this.cart)
            if (this.cart.length > 0)
              this.user.total = this.cart.map(item => item.price = item.price * item.amount).reduce((prev, next) => prev + next)
            else 
              this.user.total = 0
            this.cartData = {created: data.cartDate, cartId:this.cart.cart_id}
            this.dataSource = this.cart
            break;

          case 1:
            this.lastOrder = data.lastOrder
            this.lastCart = data.lastCart
            this.cart = []
            console.log("lastCart",this.lastCart)
            this.dataSource = this.lastCart

            break;
        }      
        this.showMessage("")
        console.log(this.maintab)
        this.maintab.renderRows()
        console.log(this.user.status)
      } else {     
        const data = await res.json() 
        this.user.status = -99
        console.log(this.user.status)
        this.titleMessage = data.msg
        console.log(data.msg);
        
      }  
    } catch (error) {
      console.log(error);
    }
  }

  public showMessage(msg:string) {
    switch (this.user.status){
        case 3:
          this.btnMessage = "Start Managing"
        break;
        case 2:
          this.btnMessage = "Continue Shopping"

        break;

        case 1:
            this.btnMessage = "Start Shopping"
          break;
          
        case 0:
          this.btnMessage = "Start Shopping"
          break;
      }
  }
  
  public async getShopInfo () {
    try {
      console.log("trying...")
      const res = await fetch('https://online-shop-bakery.herokuapp.com/login/shopinfo');
      console.log("sent...")
      const {products,orders} = await res.json();
      this.mainData = {products,orders}
      console.log("got!",{products,orders});
    } catch (error) {
      console.log(error);
    }
  }

  public async shopMainData () {
    try {
      const categs = await fetch('https://online-shop-bakery.herokuapp.com/store/categs'
            , {
        method: 'GET',
        headers: { authorization: localStorage.token },
      })
      const allcategories = await categs.json()
      this.categories = allcategories.categs
      const products = await fetch('https://online-shop-bakery.herokuapp.com/store/products', {
        method: 'GET',
        headers: { authorization: localStorage.token },
      })
      const allProducts = await products.json()
      this.products = await allProducts.products
      console.log(this.products)
      if (this.user.admin)
        this._r.navigateByUrl("admin")
      else
        this._r.navigateByUrl("store")
    } catch (error) {
      console.log(error)
    }
  }
  public async getCategories () {
    try {
      const categs = await fetch('https://online-shop-bakery.herokuapp.com/store/categs'
            , {
        method: 'GET',
        headers: {
          authorization: localStorage.token,
        },
      })
      const allCategories = await categs.json()
      return {allCategories}
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  public async getProducts () {
    try {
      const products = await fetch('https://online-shop-bakery.herokuapp.com/store/products', {
        method: 'GET',
        headers: {
          authorization: localStorage.token,
        },
      })

      const allProducts = await products.json()
      return {allProducts}
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  public async getCart () {
    try {
      const res:any = await fetch('https://online-shop-bakery.herokuapp.com/cart/', {
        method: 'GET',
        headers: {'content-type': 'application/json',
                  'authorization': localStorage.token}
      });
      const data = await res.json()
      this.cart = data.cart 
    } catch (error) {
      console.log(error);
    }

  }
  public async logout () {
    this.user = {}
    this.cart = []
    this.sum = 0
    this.lastOrder = []
    localStorage.removeItem("token")
    this._r.navigateByUrl("login")
  }

  constructor(public _r:Router) { }
}
