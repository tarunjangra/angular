import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(recipe: Recipe){
    this.sls.addIngredients(recipe.ingredients);
  }

}
