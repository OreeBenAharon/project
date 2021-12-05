import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { OrderDataService } from 'src/app/services/order-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StoreItemPopup } from '../store-item/store-item.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})


export class OrderFormComponent implements OnInit {
 @Input()

public setDetails(q:number) {
  this._od.getUserDetails(q)
  if ( q === 1) 
    this.orderFormGroup.controls.cityCtrl.setValue(this._d.user.city)
  else 
    this.orderFormGroup.controls.streetCtrl.setValue(this._d.user.street)

}

  public orderFormGroup: FormGroup;

  constructor(public _fb: FormBuilder,
              public _od: OrderDataService,
              public _d: DataService,
              public _r: Router,
              public dialog: MatDialog) { }

  
  createOrder() {
    this._od.submit()
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderPopup, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }            

  ngOnInit(): void {

    this.orderFormGroup = this._fb.group({
      cityCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      dateCtrl: ['', Validators.required],
      cardCtrl: ['', Validators.required]
    });

  }
}

// ***** POPUP *****
  
@Component({
  selector: 'order-form-popup',
  templateUrl: 'order-form-popup.html',
})
export class OrderPopup {

  @Input()
  public item:any

  constructor(public dialogRef: MatDialogRef<StoreItemPopup>,
              public _od:OrderDataService,
              public _r:Router,
              public _d:DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  public download() {
    this._od.downloadReceipt()
  }

  public back() {
    this._d.cart = []
    this.dialogRef.close();
    this._r.navigateByUrl("store")
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

