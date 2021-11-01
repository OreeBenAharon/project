import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-store-categs',
  templateUrl: './store-categs.component.html',
  styleUrls: ['./store-categs.component.css']
})
export class StoreCategsComponent implements OnInit {

  constructor(public _d:DataService, public _sd:StoreDataService) { }

  ngOnInit(): void {
  }

}
