import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 
        'This is a simple Recipe 1', 
        'https://c.ndtvimg.com/2019-05/ebsmi4t8_indian-curry_625x300_14_May_19.jpg',
        [
            new Ingredient('meat',1),
            new Ingredient('French Fires',20)
        ]),
        new Recipe('A test recipe 2', 
        'This is a simple Recipe 2', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU',
        [
            new Ingredient('bread',1),
            new Ingredient('French Fires',20),
            new Ingredient('potatos',30)
        ])
    ];
    constructor(private shoppingListService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
        // return this.recipes.slice()[index]
        return this.recipes[index]
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredient(ingredients);
    }
}