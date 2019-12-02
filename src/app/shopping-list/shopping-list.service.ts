import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 5),
  ];

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged: Subject<Ingredient[]>= new Subject();

  getIngredients (){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredents: Ingredient[]) {
    this.ingredients.push(...ingredents);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
