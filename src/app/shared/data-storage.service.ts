import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeBookService } from '../recipes/recipe-book.service';
import { Recipe } from '../recipes/recipe.model';
import {map, tap, take, exhaustMap} from 'rxjs/operators';
import { Ingredient } from './ingredient.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private rs: RecipeBookService, private authService: AuthService) { }

  storeRecipes(){
    const recipes = this.rs.getRecipies();
    this.http.put<{ name: string }>('https://g-invoicing.firebaseio.com/recipes.json', recipes).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  fetchRecipes(){

    let token: string;
    // take will allow me to subscribe the user only once.
    // and It would not be the on going subscription and no need
    // to unsubscribe that.
    this.authService.user.pipe(
      take(1),
    ).subscribe(user => {
      token = user.token;
    });

    return this.http.get<Recipe[]>('https://g-invoicing.firebaseio.com/recipes.json', {
      params: new HttpParams().set('auth', token)
    })
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
