import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, input: string , status: string): unknown {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if(value.length == 0 || input == ''){
      return value;
    }
    const arr = [];
    // @ts-ignore
    for (const item of value){
      // tslint:disable-next-line:triple-equals
      if(item[status] == input){
        arr.push(item);
      }
    }
    return arr;
  }

}
