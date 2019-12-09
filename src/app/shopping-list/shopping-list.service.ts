import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 5),
  ];


  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();
  selectedIngredientId: Subject<number> = new Subject();

  getIngredients ()  {
    return this.ingredients.slice();
  }

  getIngredient(id: number){
    return this.ingredients.slice()[id];
  }

  updateIngredient (id: number, ingredient: Ingredient){
    this.ingredients[id] = ingredient;
    this.ingredientsChanged.emit(this.ingredients.slice());
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
