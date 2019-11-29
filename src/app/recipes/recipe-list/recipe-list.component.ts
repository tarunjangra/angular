import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A Test Recipe','This is test','https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-Easy-Dinner-Recipe-HERO-600x900.jpg'),
      new Recipe('A Test Recipe','This is test','https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-Easy-Dinner-Recipe-HERO-600x900.jpg')
  ];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
