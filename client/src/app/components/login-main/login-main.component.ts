import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(public _d:DataService,
              public _sd: StoreDataService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
      this._sd.chosenCateg = 0
      if (this._d.mainData.products === 0) {
  
        this._d.getShopInfo();
  
        }
  }

}

