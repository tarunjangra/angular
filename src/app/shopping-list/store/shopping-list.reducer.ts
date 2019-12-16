import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'



// your state should be javascript object
const initialState = {
  ingredients : [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotoes', 5),
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
      break;
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    default: 
      return state;
  }
  
}