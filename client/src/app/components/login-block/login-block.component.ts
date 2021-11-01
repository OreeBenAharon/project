import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBlockComponent implements OnInit {

  constructor(public _d:DataService, public _fb:FormBuilder, public _r:Router) { }
  
  @Input()
  public loginForm:FormGroup | undefined 



  // public showMessage() {
  //   switch (this._d.user.status){
  //       case 2:
  //         //  .הודעה על כך שיש עגלה פעילה למשתמש, עגלה שלא ניסגרה + תאריך ומחיר עדכני,
  //         // במקרה הנל הכפתור התחלת קניה יתחלף בהמשך קניה
  //         this._d.titleMessage =
  //             `Your Open Cart: \r\n`
  //         for (let item of this._d.cart) {
  //           this._d.titleMessage += item.title + `(${item.price}) x ${item.amount} \r\n`
  //         }
  //         this._d.titleMessage += `${this._d.user.total}₪ at Total\r\n
  //             Created at ${this._d.cartData.created}`
  //         this._d.btnMessage = "Continue Shopping"
  //         break;
  //       case 1:
  //         //במידה ולמשתמש אין עגלה פתוחה , תופיע הרכישה האחרונה של המשתמש וכפתור 
  //         //התחלת קניה יהיה זמין.
  //         this._d.titleMessage =
  //           `Your Last Order:\r\n`
  //         for (let item of this._d.lastCart) { 
  //             this._d.titleMessage += item.title + `(${item.price}) x ${item.amount} \r\n`
  //           }
  //           this._d.titleMessage += `${this._d.lastOrder.total}₪ at Total\r\n
  //               Created at ${this._d.lastOrder.ordered_at}`
  //           this._d.btnMessage = "Start Shopping"
  //         break;
          
  //       case 0:
  //           //c .במידה והמשתמש חדש תהיה הודעה:"ברוך הבא לקניה הראשונה שלך
  //         this._d.titleMessage = "Welcome to You First Shopping!"
  //         this._d.btnMessage = "Start Shopping"
  //         break;
  //     }
  // }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

}

