import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import CartProduct from '../models/CartProduct.model';
import Product from '../models/Product.model';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  // public sideNavToggleSubject:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public _d:DataService,public _r:Router) { }

  public searchQuery:string
  public orderAmount:number
  public chosenCateg:number = 0
  
  public title:string
  public categ:number
  public price:number
  public pic:string

  public table:MatTable<any>

  public loadProducts () {
      this._d.itemsToShow = this._d.products
      console.log("items",this._d.itemsToShow)
    }

  public getProducts () {
      console.log("items",this._d.itemsToShow)
      return  this._d.products
    }
  
  public async searchByCategory (c:any) {

    if (c.index > 0) {
      try {
        const res = await fetch (`https://online-shop-bakery.herokuapp.com/store/products/categ/${c.index}`, {
            method: 'GET',
            headers: {
              authorization: localStorage.token,
            }
          })
        const data = await res.json()  
        this._d.itemsToShow = data.products
        console.log("got categ",c,this._d.itemsToShow)
      } catch (error) {
      console.log(error)
      }
    } else this._d.itemsToShow = this._d.products
  }

      
  
  public async searchByName (q:string) {
    console.log("q is",q)
    try {
      const res = await fetch (`https://online-shop-bakery.herokuapp.com/store/products/title/${q}`, {
          method: 'GET',
          headers: {
            authorization: localStorage.token,
          }
        })
        const results = await res.json()
        this._d.itemsToShow = results.products
      } catch (error) {
      console.log(error)
    }
  }

  // public async getCartToRefresh () {
  //   try {
  //     const res:any = await fetch('http://localhost/cart/', {
  //       method: 'GET',
  //       headers: {'content-type': 'application/json',
  //                 'authorization': localStorage.token}
  //     });
  //     // const data = await res.json()
  //     // this._d.cart = data.cart 
  //     return res
  //     // localStorage.token = res.token

  //     // const categs = await fetch('http://localhost/store/categs')
  //     // this.categories = await categs.json()

  //     // const products = await fetch('http://localhost/store/products')
  //     // this.products = await products.json()

  //   } catch (error) {
  //     console.log(error);
  //   }

  
  // }

  public calcTotal() {
    if (this._d.cart.length > 0)
      this._d.user.total = this._d.cart.map(item => item.price = item.price * item.amount).reduce((prev, next) => prev + next);
    else this._d.user.total = 0
  }
  
  public async add(productId:number,amount:number) {
    console.log("id:",productId,"amount",amount)
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/cart/add', {
        method: 'POST',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token},
        body: JSON.stringify({productId,amount}),
      });
      // return res
      const data = await res.json()
      this._d.cart = data.cart   
      this.calcTotal() 
      // this._d.cart = await res.json()
      this.table.renderRows() 
    } catch (error) {
      console.log(error)
      return error;
    }
  }

 
  public async changeAmount(productId:number,amount:number) {
    try {
      const itemInCart = this._d.cart.find(item => item.product_id == productId)
      console.log("item is:")
      console.log(itemInCart)
      console.log("anount:",itemInCart.amount)
      console.log("anount got:",amount)
      if (this._d.cart.find(item => item.product_id == productId).amount + amount > 0) {
        const res = await fetch('https://online-shop-bakery.herokuapp.com/cart/changeamount', {
        method: 'PUT',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token},
        body: JSON.stringify({productId,amount}),
      
      });
      const data = await res.json();
      // this.tryy(data).subscribe(res => this.table.renderRows() ) 
      this._d.cart = data.cart 
      this.calcTotal() 
      // this._d.cart = await res.json()
      // this._d.getCart()
     } else {
      this.delete(productId)
     }
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  public async delete(productId:number) {
    console.log("got 2 del",productId)
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/cart/delete', {
        method: 'DELETE',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token},
        body: JSON.stringify({productId}),
      });
      const data = await res.json()
      this._d.cart = data.cart    
      this.calcTotal() 
      // this._d.cart = await res.json()
      this.table.renderRows() 
      // this._d.getCart()
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  public async empty() {
    try {
      // :1001
      const res = await fetch('https://online-shop-bakery.herokuapp.com/cart/empty', {
        method: 'DELETE',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token}
      });
      const data = await res.json()
      // this._d.cart = data.cart    
      // this._d.cart = await res.json()
      this._d.cart = []
      this.calcTotal() 

      this.table.renderRows() 
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  
  public gotoCheckout() {
    this._r.navigateByUrl("order")
  }


  // public toggle() {
  //   return this.sideNavToggleSubject.next(null);
  // }

}