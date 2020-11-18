import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import{ Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is a simple Recipe 1', 'https://c.ndtvimg.com/2019-05/ebsmi4t8_indian-curry_625x300_14_May_19.jpg'),
    new Recipe('A test recipe 2', 'This is a simple Recipe 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbdZcWBIc1UYdO7wmsCJIKd5eGX9EF6eEyXg&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
