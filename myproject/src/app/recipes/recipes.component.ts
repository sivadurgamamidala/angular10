import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from "./recipe.service";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
  //we provide our recipe service in the recipe component. so all the component in this area share the same instance.
  //but if we navigate away to the shopping list area the recipe component is destroyed.
  //to rectified this we need to add recipeService in app.module.ts. so whole application will share the same instance.
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
