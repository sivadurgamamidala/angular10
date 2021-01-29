// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


import{ Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A test recipe 1', 'This is a simple Recipe 1', 'https://c.ndtvimg.com/2019-05/ebsmi4t8_indian-curry_625x300_14_May_19.jpg'),
  //   new Recipe('A test recipe 2', 'This is a simple Recipe 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU')
  // ];
  recipes: Recipe[];
  subcription : Subscription;

  constructor(private recipeService:RecipeService,
              private router : Router,
              private route : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.subcription = this.recipeService.recipesChanged
      .subscribe((recipes:Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
