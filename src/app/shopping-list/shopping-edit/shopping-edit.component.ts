import {Component, ElementRef, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'rb-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;

  @Output() ingredientAdded: EventEmitter = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(amt: HTMLInputElement){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientAdded.emit(newIngredient);
  }

}
