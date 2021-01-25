// import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // IngredientAdded = new EventEmitter<{name: string,amount: number}>();
  // @Output() ingredientAdded = new EventEmitter<{name: string,amount: number}>();

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName,ingAmount);
  //   // this.ingredientAdded.emit(newIngredient);
  //   this.shoppingListService.addIngredients(newIngredient);
  // }
  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingListService.addIngredients(newIngredient);
  }
  onDeleteItem(){

  }
}
