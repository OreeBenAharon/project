import { Component, OnInit } from '@angular/core';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { DataService } from 'src/app/services/data.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-editbar',
  templateUrl: './admin-editbar.component.html',
  styleUrls: ['./admin-editbar.component.css']
})
export class AdminEditbarComponent implements OnInit {
  
  constructor(public _ad:AdminDataService,
              public _d:DataService,
              public _fb: FormBuilder) { }


  public toggleEditBar() {
    this._ad.adminBarShow = !this._ad.adminBarShow
  }

  ngOnInit(): void { 


    this._ad.editItemForm = this._fb.group({
      titleEditCtrl: this._ad.titleEditCtrl,
      typeEditCtrl: this._ad.typeEditCtrl,
      priceEditCtrl: this._ad.priceEditCtrl,
      picEditCtrl: this._ad.picEditCtrl
    })

    this._ad.addItemForm = this._fb.group({
      titleAddCtrl: this._ad.titleAddCtrl,
      typeAddCtrl: this._ad.typeAddCtrl,
      priceAddCtrl: this._ad.priceAddCtrl,
      picAddCtrl: this._ad.picAddCtrl
    })
      
  }

}

