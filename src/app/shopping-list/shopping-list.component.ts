import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Model/ingredient.model';
import {ShoplistService} from '../services/shoplist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopservice: ShoplistService) { }

  ngOnInit(): void {
    this.ingredients = this.shopservice.getingredient();
    this.shopservice.event.subscribe((data: any) =>{
      this.ingredients = data;
    });
  }

}
