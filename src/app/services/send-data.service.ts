import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  loginname = 'admin';
  password = '1234';
  checkflag = false;
  constructor() {
  }

  setdata(name: string , pass: any){
    if(name === this.loginname && pass === this.password){
      this.checkflag = true;
    }
  }
  authflag(){
    const validprom = new Promise((resolve,reject) =>{
      if(this.checkflag === true){
        resolve(true);
      }
    });
    return validprom;
  }
}
