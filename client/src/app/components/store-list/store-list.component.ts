import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/store-data.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  constructor(public _sd:StoreDataService, public _d:DataService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
      if (this._sd.chosenCateg === 0) this._d.itemsToShow = this._d.products
      console.log(this._d.itemsToShow)
      

  }

}
