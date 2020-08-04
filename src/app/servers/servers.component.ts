import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {Observable, Observer, Subscription , Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SubjectService} from '../services/subject.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  animations: [
    trigger('divstate' , [state('normal' , style({'background-color': 'red',transform: 'translateX(10px)'})),
                                         state('high' , style({'background-color': 'green',transform: 'translateX(-100px)'})),
    transition('normal <=> high',animate(3000)),

    ])],
})
export class ServersComponent implements OnInit, OnChanges , OnDestroy {
  servers = [{name: 'f-22', status: 'online'}, {name: 'f-35', status: 'ofline'}, {name: 'f-18', status: 'online'},
    {name: 'f-15', status: 'nodata'}, {name: 'f-14', status: 'online'}, {name: 'f-16', status: 'ofline'}];
  options: string[] = ['online', 'ofline', 'nodata'];
  pipeinput = '';
  public state: string;
  showdate = '';
  stopobserver: Subscription;
  subject = new Subject<any>();
  constructor(private userservice: SubjectService , private location: Location) {
  }

  ngOnInit(): void {
    console.log('ok');
  }
  setcolor(val: { name: string; status: string }) {
    return {
      'btn-danger': val.status === 'ofline',
      'btn-success': val.status === 'online',
      'btn-primary': val.status === 'nodata'
    };
  }

  onanimation() {
    this.state === 'normal' ? this.state = 'high' : this.state = 'normal';
  }
  getval(e) {
    this.showdate = e;
  }
  ngOnChanges(): void {
    console.log('this.vaaal');
  }
  onObserver(){
    const obs = Observable.create((data: Observer<any>)=>{
      data.next('show the next');
      data.error('observe error');
      data.complete();
      data.next('show the number 2');
    });
    this.stopobserver =  obs.subscribe(
      (a: any)=>{console.log(a);},
      (e: any)=>{console.log(e);},
      ()=>{console.log('show the complitee');}
    );
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
  }
  onsubject(){
  }
  goback(){
    if(window.history.length > 1){
      this.location.back();
    } else {console.log('canot');}
  }
}

