import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  name: string;
  amount: number;
  editMode: boolean = false;
  selectedIngredientSubscription: Subscription;
  selectedIngredient: number;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.selectedIngredientSubscription = this.shoppingService.selectedIngredientId.subscribe(
      (id: number) => {
          this.name = this.shoppingService.getIngredient(id).name;
          this.amount = this.shoppingService.getIngredient(id).amount;
          this.selectedIngredient = id;
          this.editMode = true;
  });
  }

  onAddItem (f: NgForm){
    const newIngredient = new Ingredient(f.value.name, f.value.amount);
    if(!this.editMode){
      this.shoppingService.addIngredient(newIngredient);
    }else if(this.editMode){
      this.shoppingService.updateIngredient(this.selectedIngredient, newIngredient);
    }
    f.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.editMode = true;
    this.selectedIngredientSubscription.unsubscribe();
  }

  onClear(f: NgForm){
    f.reset();
    this.editMode = false;
  }
  
}
