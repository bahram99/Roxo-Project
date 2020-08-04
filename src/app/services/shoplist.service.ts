import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../Model/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoplistService {
  public ingredients: Ingredient[] = [{name: 'بسته ماکارانی', amount: 2},{name: 'سیب' , amount: 4}];
 // event = new EventEmitter<any>();
    event = new Subject<any>();
  constructor() { }

  getingredient(){
    return this.ingredients.slice();
  }

  add(a: string , b: number){
    this.ingredients.push({name: a , amount: b});
    this.event.next(this.ingredients);
  }
}
