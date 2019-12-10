import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeBookService} from '../recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeBookService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipeChanged
    .subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipies();
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

}
