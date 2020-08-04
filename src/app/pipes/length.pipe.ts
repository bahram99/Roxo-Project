import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {
  transform(val: string): unknown {
    if(val?.length > 5){
     return console.log('the length is'+ val.length);
    }
  }

}
