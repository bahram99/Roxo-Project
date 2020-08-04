import { Component, OnInit } from '@angular/core';
import { PostModel} from '../Model/post.model';
import {HttpserviceService} from '../services/httpservice.service';
@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {
  constructor(private  http: HttpserviceService) { }
  post: PostModel[];
  add = {user: 10, id: 110, title: 'test' , body: 'test body'};
  update = {user: 20, id: 321, title: 'update' , body: 'test update'};
  ngOnInit(): void {
  }
  fetchdata(){
    this.http.onfetchdata().subscribe((data: PostModel[])=>{
      this.post = data;
    });
  }
  onadddata(){
    this.http.onaddpost(this.add).subscribe((data: any)=>{
      console.log(data);
    });
  }
  onupdate(){
    this.http.onupdate(this.update.id , this.update).subscribe((data)=>{console.log(data);});
  }
  ondelete(){
    this.http.ondelete(this.update.id).subscribe((val) =>{alert('حذف شد' + this.update.id);});
  }
}
