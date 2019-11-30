import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeBookService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty schnitzel - just awesome',
        'https://www.crushpixel.com/static12/preview2/stock-photo-tasty-schnitzel-in-breading-with-fried-potato-onion-and-mushrooms-859791.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]
    ),
    new Recipe(
        'Big fat burger',
        'What else you need to say?',
        'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]
        )
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

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }


}