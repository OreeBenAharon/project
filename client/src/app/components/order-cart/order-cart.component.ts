import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import { Renderer2} from '@angular/core';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { OrderDataService } from 'src/app/services/order-data.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})    

@Input() 


export class OrderCartComponent implements OnInit {

  constructor(public _d:DataService,
              public _sd:StoreDataService,
              public _od:OrderDataService,
              private renderer: Renderer2) { 
              } 

  displayedColumns: string[] = ['picture', 'title', 'amount', 'price'];
  dataSource = this._d.cart;

  ngOnInit(): void {
  }

}





 
