import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private http: HttpClient) {

  }
  onfetchdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  onaddpost(val) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', val).pipe(
      tap((getval: any)=>{console.log(getval.id);})
    )
  }

  onupdate(id: number , data){
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/'+id , data);
  }
  ondelete(id: number){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id );
  }

}
