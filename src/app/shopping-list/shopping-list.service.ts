import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 5),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients (){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredents: Ingredient[]) {
    this.ingredients.push(...ingredents);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }


}
