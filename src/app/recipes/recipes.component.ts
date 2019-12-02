import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeBookService} from './recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeBookService]
})
export class RecipesComponent implements OnInit,OnDestroy {

  @Input() selectedRecipe: Recipe;
  sub: Subscription;
  constructor(private rs: RecipeBookService) { }

  ngOnInit() {
    this.sub = this.rs.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
