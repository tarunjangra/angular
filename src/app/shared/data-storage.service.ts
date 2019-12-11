import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeBookService } from '../recipes/recipe-book.service';
import { Recipe } from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private rs: RecipeBookService) { }

  storeRecipes(){
    const recipes = this.rs.getRecipies();
    this.http.put<{ name: string }>('https://g-invoicing.firebaseio.com/recipes.json', recipes).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://g-invoicing.firebaseio.com/recipes.json')
    .pipe(map(
      recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients?recipe.ingredients:[]}
        });
      }
    ), tap(
      recipes => {
        this.rs.setRecipes(recipes);
      }
    ));
  }
}
