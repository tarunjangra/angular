import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeBookService } from './recipe-book.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe> {

  constructor(private dataStorage: DataStorageService, private recipeService: RecipeBookService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any { 
    const recipes = this.recipeService.getRecipies();
    if (recipes.length === 0){
      return this.dataStorage.fetchRecipes();
    }
    return recipes;
  }
}

