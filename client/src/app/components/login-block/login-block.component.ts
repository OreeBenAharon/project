import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})
export class LoginBlockComponent implements OnInit {

  constructor(public _d:DataService,
              public _fb:FormBuilder,
              public _r:Router) { }
  
  @Input()
  public loginForm:FormGroup | undefined 

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username:["", Validators.required],
      password:["", Validators.required]
    })
  }

}

