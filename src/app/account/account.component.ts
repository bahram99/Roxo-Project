import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ShowlogService } from '../services/showlog.service';
import {SubjectService} from '../services/subject.service';
import { Subject } from 'rxjs/Subject';
import {LoginService} from '../services/login.service';
import {SendDataService} from '../services/send-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  id = 1;

  constructor(private serv: ShowlogService  ) { }
  @Output() createaccount = new EventEmitter<{name: string , status: string}>();

  ngOnInit(): void {
    const sub = new Subject<any>();
    sub.subscribe({
    next: (v) => {console.log(v);},
    error: err => {console.log(err);}
    });
    sub.next(12);
    sub.error('eror error error');
  }
  conslolog(val){
    console.log(val);
  }
}
