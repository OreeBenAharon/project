import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  @ViewChild('drawer') public drawer: MatSidenav;

  constructor(public _d:DataService, public _sd:StoreDataService) { }
  
  @Input()
  public showFiller:boolean

  ngOnInit(): void {
  }

}





