import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('recipeitem') recipe: any;
  @Output() outrecipe = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  selectrecipe(){
    this.outrecipe.emit(this.recipe);
  }

}
