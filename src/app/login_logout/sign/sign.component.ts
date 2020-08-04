import { Component, OnInit } from '@angular/core';
import {NgModel, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signform: FormGroup;
  userblock = ['admin' ,'foo' ,'bar'];
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.signform = new FormGroup({
      name:  new FormControl(null , [Validators.required , this.blockusername.bind(this)] ),
      email: new FormControl(null , [Validators.required , Validators.email] , this.blockemail),
      pass:  new FormControl(null , Validators.required),
      addresses: new FormArray([])
    });
  }

  signcheck(){
    const name: string = this.signform.get('name').value;
    const email: string = this.signform.get('email').value;
    const pass: string = this.signform.get('pass').value;
    this.loginService.onsubmit_sign(name,email,pass).subscribe(
      (response: any)=>{
          this.loginService.token = response.token;
      }
    );
  }
  blockemail(email: FormControl){
    const prom = new Promise((resole,reject) =>{
      setTimeout(()=>{
        if(email.value === 'bahram@gmail.com'){
          resole({isblock: true});
        }else {resole(null);}
      } , 2000);
    });
    return prom;
  }
  blockusername(control: FormControl){
    if(this.userblock.indexOf(control.value) > -1){
      return {userblock: true};
    }else {return null;}
  }
  newaddress(){
    const newcontrol = new FormControl(null);
    (this.signform.get('addresses') as FormArray).push(newcontrol);
  }
}
