import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(str: any): any {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
    
  }
}
