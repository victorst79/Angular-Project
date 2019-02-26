import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    value = value.substr(0, 80);
    value += '...';
    return value;
  }

}
