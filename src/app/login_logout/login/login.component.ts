import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import validate = WebAssembly.validate;
import {LoginService} from '../../services/login.service';
import {SendDataService} from '../../services/send-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  blockname = ['admin'];
  @ViewChild('nam') nam: any;
  @Output() loginame = new EventEmitter<string>();

  constructor(private login: LoginService  ,  private send: SendDataService ,
              private formBuild: FormBuilder,private route: Router) { }
  isCollapsed = true;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null , Validators.required ),
      pass: new FormControl(null , Validators.required , this.checkpass),
      address: this.formBuild.array([])
    })
  }

  check(){
    const nam: string = this.form.get('name').value;
    const passwd: string = this.form.get('pass').value;
    this.send.setdata(nam,passwd);
  }
  onaddress(){
    (this.form.get('address') as FormArray).push(this.formBuild.control(''));
  }
  checkpass(control: FormControl){
    const prom = new Promise((resolve , reject) =>{
      if(control.value.length < 4){
        resolve({shortpass: true})
      }else { return null; }
    });
    return prom;
  }
}
