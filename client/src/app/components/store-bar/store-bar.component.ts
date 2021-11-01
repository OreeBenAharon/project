import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store-bar',
  templateUrl: './store-bar.component.html',
  styleUrls: ['./store-bar.component.css']
})  


export class StoreBarComponent implements OnInit {

  constructor(public _d:DataService, public _sd:StoreDataService) { }
  showFiller = true;

  ngOnInit(): void {
  }

 
}
