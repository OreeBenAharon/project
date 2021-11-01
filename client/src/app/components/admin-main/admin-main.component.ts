import { _Schedule } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  constructor(public _d:DataService,
              public _ad:AdminDataService) { }
  public showFiller = true


  ngOnInit(): void {
    this.drawer.open()
    this._ad.drawer = this.drawer

  }

}
