import { Injectable, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import Product from '../models/Product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  public adminBarShow:boolean = false
  public mode:string ="add"
  public drawer:MatDrawer

  editItemForm: FormGroup

  titleEditCtrl = new FormControl("");
  typeEditCtrl = new FormControl(1);
  priceEditCtrl = new FormControl(0);
  picEditCtrl = new FormControl("");

  public addItemForm: FormGroup


  titleAddCtrl = new FormControl("");
  typeAddCtrl = new FormControl(1);
  priceAddCtrl = new FormControl(0);
  picAddCtrl = new FormControl("");

  public productEditing:Product = {id:0,
                                  title:"",
                                  categ_id:0,
                                  price:0,
                                  pic:""}

  constructor(public _d:DataService) { }

  public startAdding() {
    this.mode = "add"
    this.drawer.open()
  }

  public startEditing(id:number) {
    this.productEditing = this._d.products.find (item => item.id === id)
    this.titleEditCtrl.setValue(this.productEditing.title)
    this.typeEditCtrl.setValue(this.productEditing.categ_id)
    this.priceEditCtrl.setValue(this.productEditing.price)
    this.picEditCtrl.setValue(this.productEditing.pic)

    this.mode = "edit"
    console.log(this.productEditing) 
    this.drawer.open()
  }

  public toggleEditBar() {
    this.drawer.toggle()
  }

  public async adminAdd(title:string,
                        categ:number,
                        price:number,
                        pic:string) {
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/admin/add', {
        method: 'POST',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token},
        body: JSON.stringify({title,categ,price,pic}),
      });
      const newProducts = await res.json()
      this._d.products = newProducts.products

    } catch (error) {
      console.log(error);
    }
  }

  public async adminEdit(productId:number,
                         title:string, 
                         categ:number,
                         price:number,
                         pic:string) {
    console.log(productId, title, categ, price, pic)
    try {
      const res = await fetch('https://online-shop-bakery.herokuapp.com/admin/edit', {
        method: 'PUT',
        headers: {'content-type': 'application/json',
                  authorization: localStorage.token},
        body: JSON.stringify({productId, title, categ, price, pic}),
      });
      const newProducts = await res.json()
      this._d.products = newProducts.products


    } catch (error) {
      console.log(error);
    }
  }

}
