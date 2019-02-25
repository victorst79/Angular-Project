import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
