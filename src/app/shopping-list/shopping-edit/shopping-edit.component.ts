import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  name: string;
  amount: number;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingService.selectedIngredient.subscribe(
      (ingredient: Ingredient) => {
          this.name = ingredient.name;
          this.amount = ingredient.amount;
  });
  }

  onAddItem (f: NgForm){
    const newIngredient = new Ingredient(f.value.name, f.value.amount);
    this.shoppingService.addIngredient(newIngredient);
    f.reset();
  }
}
