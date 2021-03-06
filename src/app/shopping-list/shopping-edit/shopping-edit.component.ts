import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f',{static: true}) editForm: NgForm;

  editMode: boolean = false;
  selectedIngredientSubscription: Subscription;
  selectedIngredient: number;

  constructor(
    private shoppingService: ShoppingListService, 
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
    ) { }

  ngOnInit() {
    this.selectedIngredientSubscription = this.shoppingService.selectedIngredientId.subscribe(
      (id: number) => {
          this.editForm.setValue({
            name: this.shoppingService.getIngredient(id).name,
            amount: this.shoppingService.getIngredient(id).amount
          });
          this.selectedIngredient = id;
          this.editMode = true;
  });
  }

  onAddItem (f: NgForm){
    const newIngredient = new Ingredient(f.value.name, f.value.amount);
    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.selectedIngredient, ingredient: newIngredient}))
      // this.shoppingService.updateIngredient(this.selectedIngredient, newIngredient);
    }else {
      // this.shoppingService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.editMode = true;
    this.selectedIngredientSubscription.unsubscribe();
  }

  onClear(f: NgForm){
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.shoppingService.deleteIngredient(this.selectedIngredient);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.selectedIngredient))
    this.editForm.reset();
    this.editMode = false;
  }
  
}
