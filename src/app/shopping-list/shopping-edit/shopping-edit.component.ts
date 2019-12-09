import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem (f: NgForm){
    const newIngredient = new Ingredient(f.value.name, f.value.amount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
