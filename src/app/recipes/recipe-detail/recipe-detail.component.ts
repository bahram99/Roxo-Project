import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('getrecipe') recipe: any;
  valuee = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.valuee);
  }



}
