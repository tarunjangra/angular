import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients :Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
    });

  }

  editShoppingList (id: number){
    this.shoppingService.selectedIngredient.next(this.ingredients[id]);
  }

}
