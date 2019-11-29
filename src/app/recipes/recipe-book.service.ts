import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeBookService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is test','https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-Easy-Dinner-Recipe-HERO-600x900.jpg'),
    new Recipe('A Test Recipe','This is test','https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-Easy-Dinner-Recipe-HERO-600x900.jpg')
  ];


  getRecipies(){
    // return copy of the above array
    // instead of original array.
    // beacause by default js provide
    // reference of the variables.
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  getRecipe(indx: number) {
    return this.recipes[indx];
  }


}