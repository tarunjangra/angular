import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeBookService} from '../recipe-book.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;


  constructor(
      private sls: ShoppingListService,
      private rs: RecipeBookService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.route.params
        .subscribe(
            (params: Params)=>{
              this.id = +params['id'];
              this.recipe = this.rs.getRecipe(id);
        });
  }

  onAddToShoppingList(recipe: Recipe){
    this.sls.addIngredients(recipe.ingredients);
  }

}
