import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeBookService} from './recipe-book.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeBookService]
})
export class RecipesComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }


}
