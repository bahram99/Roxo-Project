import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(a: number , b: number): unknown {
    return Math.pow(a ,b);
  }

}
