// import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import{ Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // IngredientAdded = new EventEmitter<{name: string,amount: number}>();
  // @Output() ingredientAdded = new EventEmitter<{name: string,amount: number}>();
  @ViewChild('f') slForm: NgForm; //slform = (shopping list form)
  subscription: Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index : number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name : this.editedItem.name,
            amount : this.editedItem.amount
          });
        }
      );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
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
