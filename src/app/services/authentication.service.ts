import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  flag= true  ;

  logout(){
    this.flag = false;
  }
  login(){
    this.flag = true;
  }
  isauthenticate(){
    const prom = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.flag);
      }, 1000);
    });
    return prom;
  }
}
