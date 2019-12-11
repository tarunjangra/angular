import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  recipeChanged: Subject<Recipe[]> = new Subject();


  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty schnitzel - just awesome',
  //     'https://i1.wp.com/food.theplainjane.com/wp-content/uploads/2015/08/chicken-schnitzel-special.jpg?w=800',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     'Big fat burger',
  //     'What else you need to say?',
  //     'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private http: HttpClient) { }

  getRecipies(){
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}