import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../Model/recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() parent2 = new EventEmitter<any>();
  recipes: Recipe[] = [
    new Recipe('دستور پخت ماکارونی','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', '../../../assets/image/01.jpg'),
    new Recipe('دستور پخت پیتزا','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', '../../../assets/image/01.jpg'),
    new Recipe('دستور پخت تستی','یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم', '../../../assets/image/01.jpg'),
  ];
  constructor(private route: Router , private activate: ActivatedRoute) { }

  ngOnInit(): void {
  }
  entekhab(e){
    this.parent2.emit(e);
  }
  onnewfood(){
    this.route.navigate(['food']);
  }
}
