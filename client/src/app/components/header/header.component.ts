import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public _d:DataService, 
              public _r:Router) { }

  public back() {
    this._r.navigateByUrl("")
  } 
  ngOnInit(): void {
  }

}
