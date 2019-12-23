import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


import {Recipe} from '../recipe.model';
import {RecipeBookService} from '../recipe-book.service';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;


  constructor(
      private rs: RecipeBookService,
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.route.params
        .subscribe(
            (params: Params)=>{
              this.id = +params['id'];
              this.recipe = this.rs.getRecipe(this.id);
        });
  }

  onAddToShoppingList(recipe: Recipe){

    this.store.dispatch(new ShoppingListActions.AddIngredients(recipe.ingredients));

    // this.sls.addIngredients(recipe.ingredients);
  }

  onDeleteRecipe(){
    this.rs.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
