  
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';
import { OrderDataService } from '../services/order-data.service';


@Pipe({
    name: 'highlight',
    pure: false,
})
export class HighlightPipe implements PipeTransform {
    constructor(public _od: OrderDataService) {}

    transform(value: string): unknown {
    var re = new RegExp(this._od.searchValue, 'gi');
    return value.replace(re, (s) => {
        return `<span class="highlight">${s}</span>`;
    });
  }
}