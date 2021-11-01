import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  
  constructor(public _formBuilder: FormBuilder,

              public _d:DataService,
              public _r:Router,) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      idCtrl: ['', Validators.required],
      usernameCtrl: ['', [Validators.required, Validators.email]],
      passwordCtrl: ['', Validators.required],
      rePasswordCtrl: ['', Validators.required]
      
    });

    this.secondFormGroup = this._formBuilder.group({
      fnameCtrl: ['', Validators.required],
      lnameCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required]
    });
  }

}

