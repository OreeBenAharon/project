import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})

export class LoginInfoComponent implements OnInit {
  @ViewChild('maintab', { static: true }) public maintab!: MatTable<any>;

  columns = [
    {
      columnDef: 'title',
      header: 'Product',
      cell: (element) => `${element.title}`
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element) => `${element.price}`
    },
    {
      columnDef: 'amount',
      header: 'Amount',
      cell: (element) => `${element.amount}`
    }
  ];
  
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(public _d:DataService) { }

  @Input()

  ngOnInit(): void {
    this._d.maintab = this.maintab
  
  } 
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
