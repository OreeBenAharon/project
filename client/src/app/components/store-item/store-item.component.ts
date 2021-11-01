import { Component, Inject, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/Product.model';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})

export class StoreItemComponent implements OnInit {

  
  @Input()
  public item:Product


  constructor(public _sd:StoreDataService,
              public _d:DataService, 
              public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(StoreItemPopup, {
      width: '250px',
      data: {item: this.item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  ngOnInit(): void {
    console.log(this._d.itemsToShow)
  }
}

//*****
  
@Component({
  selector: 'store-item-popup',
  templateUrl: 'store-item-popup.html',
})
export class StoreItemPopup {

  @Input()
  public item:any

  constructor(public dialogRef: MatDialogRef<StoreItemPopup>,
              public _sd:StoreDataService,
              public _d:DataService,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  public int(n:string) {
    return parseInt(n)
  }

  public addItem (productId:number,amount:number) {
    this._sd.add(productId,amount)
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

