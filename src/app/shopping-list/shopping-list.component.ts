import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients :Ingredient[];
  sub: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
    this.sub = this.shoppingService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
    });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
