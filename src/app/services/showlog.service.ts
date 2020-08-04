import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowlogService {
  constructor() { }
  show(a: string , b: string){
    console.log(a + ' and ' + b);
  }
}
