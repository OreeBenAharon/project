import { Component, OnInit, ViewChild } from '@angular/core';
import CartProduct from 'src/app/models/CartProduct.model';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import {MatInputModule} from '@angular/material/input';
import { MatDrawer, MatDrawerContainer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.css']
})

export class StoreMainComponent implements OnInit {

  @ViewChild('drawer', { static: true }) public drawer: MatDrawer;

  
  constructor(public _d:DataService, public _sd:StoreDataService) { }
  showFiller = true;
  
  ngOnInit(): void {
    this.drawer.toggle();
  } 
}

