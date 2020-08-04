import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Params} from '@angular/router';
import {SubjectService} from '../../services/subject.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute , private usersevice: SubjectService) { }
  user =  {id: '' , name: ''};
  subject = new Subject<any>();
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.user.id = val.id;    /*روش اول*/
    });
    this.user.name = this.route.snapshot.params.name;   /*روش دوم*/

  }
  onsubject(){
    this.usersevice.saveid.next(this.route.snapshot.params.id);
    this.usersevice.showid();
  }
    /*this.route.params.subscribe((val: Params) =>{
      this.user.id  = val.id;
      this.user.name = val.name;
    });*/
}
