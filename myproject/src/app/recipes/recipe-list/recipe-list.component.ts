import { Component, OnInit } from '@angular/core';

import{ Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simple Recipe', 'https://c.ndtvimg.com/2019-05/ebsmi4t8_indian-curry_625x300_14_May_19.jpg')
  ];
  onCreationRecipe(){
    this.recipes.push(this.recipes[0],this.recipes[1],this.recipes[2]);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
