import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeBookService} from '../../recipe-book.service';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeBookService) { }

  ngOnInit() {
  }

  onSelectRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
