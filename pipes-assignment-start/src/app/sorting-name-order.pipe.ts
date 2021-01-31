import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingNameOrder'
})
export class SortingNameOrderPipe implements PipeTransform {

  transform(value: any): any {
    value.sort(function (x,y) {
      let a = x.name.toUpperCase(), b = y.name.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    })
    return value;
  }

}
