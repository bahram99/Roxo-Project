import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }
  public token = new Subject<any>();

  onsubmit_sign(name: string , email: string, password: any){
    const signbody = {namee: name , emaill: email, passwd: password};
    return  this.httpClient.post('https:/test', signbody);
  }

  onsubmit_login(name: string ,  password: any){
    const loginbody = {namee: name, pass: password};
    return this.httpClient.post('http://localhost:4200/login' , loginbody).subscribe(
      (response: any) =>{
        localStorage.setItem('tokenlogin' , response.token);
      }
    );
  }
}
