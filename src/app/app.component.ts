import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatButtonModule } from '@angular/material/button';
import {SendDataService} from './services/send-data.service';
import {Title} from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Observable<number>;
  values: number[] = [ ];
  anyerror: boolean;
  complete: boolean;
  name = '';
  flag = false;
  color = 'red';
  checked = false;
  disabled = false;
  coolor= false;
  constructor(private send: SendDataService , private tite: Title ) {
  }
  loginnameval(val){
    console.log('the val is '+val);
  }
  ngOnInit(): void {
    return this.settitle();
  }
  changecolor(){
    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    if(this.coolor ===true){
      document.getElementById('naav').classList.remove('bg-secondary')
     , document.getElementById('naav').classList.add('bg-dark');} else {
      document.getElementById('naav').classList.remove('bg-dark')
    , document.getElementById('naav').classList.add('bg-secondary') ;
    }
  }
  settitle(){
    this.tite.setTitle('roxo');
  }
  show(){
   // this.name = this.send.loginname;
    //this.flag = this.send.sendflag;
    //console.log(this.flag);
  }
}
