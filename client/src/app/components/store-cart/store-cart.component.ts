import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { StoreDataService } from 'src/app/services/store-data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
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
 
@Component({
  selector: 'app-store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.css'],
})

export class StoreCartComponent implements OnInit {

  @ViewChild('tab', { static: true }) table!: MatTable<any>;

  constructor(public _d:DataService,
              public _sd:StoreDataService) { }

  @Input()


  showFiller = true;
  
  displayedColumns: string[] = ['picture', 'title', 'amount', 'price', 'position' ];
  // dataSource = this._d.cart;

  // public async deleteFromCart(id:number) {
  //   const res = await this._sd.delete(id)
    
  //   this.refreshCart()
  // }

  // public async refreshCart() {
  //   const data = await this._sd.getCartToRefresh()
  //   this._d.cart = data.cart
  //   this.ngOnInit()
  // }
  // displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  // dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this._sd.table = this.table
    // console.log( this._d.cart)
    // this.table.renderRows()
    // this.dataSource = this._d.cart;
  }

}

// @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

