import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, proName : string): any {
    if ((filterString === '') || (value.length === 0) ) {
      return value;
    }
    const resultArray = [];
    for( const item of value) {
      if(item[proName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
