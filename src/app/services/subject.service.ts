import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor() { }
  isactive  = new Subject();
  saveid = new Subject<any>();

  showid(){
    this.saveid.subscribe({
      next: (v) => {console.log(v);}
    });
  }
}
