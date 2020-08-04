import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router , Params} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { Observer } from 'rxjs/Observer';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private  rote: Router , private roter: ActivatedRoute , private active: SubjectService) { }
  date = new Date(1999,12,15);
  power: number;
  num: number;
  id = 2;
  input: string;
  user: {id: any ,name: string };
  dissubscribe: Subscription;
  ngOnInit(): void {
    const observ =   Observable.create((obs: Observer<string>) =>{
      setTimeout(()=>{
        obs.next('the result');
      } , 1000);
      setTimeout(()=>{
        obs.error('error');
      } , 3000);
    });
    this.dissubscribe =  observ.subscribe(
      (data: string) => {console.log(data);},
      (error) => {console.log(error);}
    );

    const test = new Observable();
    test.subscribe({
      next(nu) { console.log((nu));},
    });
    this.active.isactive.subscribe((val: number) => {
      if (val === 1) {
        this.id = 22;
      }else {this.id = 33;}
    });
    console.log(this.id);

  }
  ngOnDestroy() {
    this.dissubscribe.unsubscribe();
  }
  gotoserver(){
    this.rote.navigate(['/servers']);
  }
}
