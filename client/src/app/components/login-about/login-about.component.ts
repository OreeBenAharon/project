import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-about',
  templateUrl: './login-about.component.html',
  styleUrls: ['./login-about.component.css']
})

@Input()

export class LoginAboutComponent implements OnInit {

  constructor(public _d:DataService) { }

  ngOnInit(): void {
  }

}
