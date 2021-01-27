import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route:ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          // console.log(this.editMode);
          this.initForm();
        }
      );
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name' : new FormControl(),
      'amount' : new FormControl()
    }));
  }

  private initForm() {
    let recipeName = '';
    let recipeimagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeimagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredeints']) {
        for (let ingredient of recipe.ingredeints) {
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name),
              'amount' : new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeimagePath),
      'description' : new FormControl(recipeDescription),
      'ingredients' : recipeIngredients
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

}
