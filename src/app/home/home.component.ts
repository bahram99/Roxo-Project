import {Component, OnInit, HostListener, Renderer2, ElementRef, Input , NgModule} from '@angular/core';
import { LoggingService } from './service';
import { AuthenticationService } from '../services/authentication.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  accounts = [{
    name: 'test', status: 'testy'
  }];
  constructor(private service: AuthenticationService ) {
  }
  ngOnInit(): void {
  }
  addaccount(add: { name: string, status: string }) {
    this.accounts.push(add);
  }
  addnewstatus(change: { id: number, newstatus: string }) {
    this.accounts[change.id].status = change.newstatus;
  }

}
