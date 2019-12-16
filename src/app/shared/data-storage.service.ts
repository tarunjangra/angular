import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeBookService } from '../recipes/recipe-book.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private rs: RecipeBookService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.rs.getRecipies();
    this.http.put<{ name: string }>('https://g-invoicing.firebaseio.com/recipes.json', recipes).subscribe();
  }

  fetchRecipes() {

    // let token: string;
    // take will allow me to subscribe the user only once.
    // and It would not be the on going subscription and no need
    // to unsubscribe that.
    return this.http.get<Recipe[]>('https://g-invoicing.firebaseio.com/recipes.json').pipe(
      map(
        (recipes: Recipe[]) => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          });
        }
      ),
      tap(
        (recipes: Recipe[]) => {
          this.rs.setRecipes(recipes);
        }
      )
    );

  }
}
