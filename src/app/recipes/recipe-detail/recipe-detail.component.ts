import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


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
      private route: ActivatedRoute,
      private router: Router
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
    this.sls.addIngredients(recipe.ingredients);
  }

  onDeleteRecipe(){
    this.rs.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
