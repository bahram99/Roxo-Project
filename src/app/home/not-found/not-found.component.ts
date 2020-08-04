import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  error: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.error = this.route.snapshot.data.message;
  }

}
