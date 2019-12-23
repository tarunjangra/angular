import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';



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
      };
      break;
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      }
      const updatedIngredients = [
        ...state.ingredients
      ]
      updatedIngredients[action.payload.index] = updatedIngredient
      return {
        ...state,
        ingredients: updatedIngredients
      };
      break;
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== action.payload
        })
      };
      break;
    default: 
      return state;
  }
  
}