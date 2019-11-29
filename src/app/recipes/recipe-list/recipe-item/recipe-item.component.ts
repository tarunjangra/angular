import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() selectedRecipe: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(){
    this.selectedRecipe.emit();
  }

}
