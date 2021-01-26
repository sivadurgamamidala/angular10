import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients : Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];
  ingredients : Ingredient[];
  private igChnageSub : Subscription;

  constructor(private  shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChnageSub =  this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[])=>{
          this.ingredients = ingredients;
        }
      )
  }

  onEditItem(index : number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.igChnageSub.unsubscribe();
  }
  // onIngredientAdded(ingredient: Ingredient ){
  //   this.ingredients.push(ingredient);
  // }
}
