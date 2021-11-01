import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  public value = ''

  constructor(public _d:DataService, public _sd:StoreDataService) {
    
   }

  ngOnInit(): void {
  }

}
