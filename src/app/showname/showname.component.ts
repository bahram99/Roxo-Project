import { Component, OnInit } from '@angular/core';
import {SendDataService} from '../services/send-data.service';

@Component({
  selector: 'app-showname',
  templateUrl: './showname.component.html',
  styleUrls: ['./showname.component.css']
})
export class ShownameComponent implements OnInit {

  constructor(private send: SendDataService) { }
  name = '';
  flag = false;
  ngOnInit(): void {
    this.name = this.send.loginname;
  }

}
