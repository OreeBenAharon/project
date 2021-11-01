import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/models/Product.model';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})

export class AdminItemComponent implements OnInit {
  @Input()

  public item:Product

  public showEditBar() {
    this._ad.adminBarShow = true
  }

  constructor(public _sd:StoreDataService,
              public _d:DataService, 
              public _ad:AdminDataService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    console.log(this._d.itemsToShow)
  }
}