import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeBookService} from '../recipe-book.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeBookService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies()
  }

}
