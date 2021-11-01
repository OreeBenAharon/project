  
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Pipe({
    name: 'highlight',
    pure: false,
})
export class HighlightPipe implements PipeTransform {
    constructor(public _od: DataService) {}

    transform(value: string): unknown {
    var re = new RegExp(this._od.checkoutSearchValue.value, 'gi');
    return value.replace(re, (s) => {
        return `<span class="highlight">${s}</span>`;
    });
  }
}