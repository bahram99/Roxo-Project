import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  @Input() account: {name: string , status: string};
  @Input() id: number;
  @Output() statuschange = new EventEmitter<{id: number , newstatus: string}>();
  constructor() { }
  ngOnInit(): void {

  }


  onsetto(val: string){
    this.statuschange.emit({
      id:  this.id , newstatus: val });
  }

}
