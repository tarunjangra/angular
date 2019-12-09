import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeBookService {


  private recipes: Recipe[] = [
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty schnitzel - just awesome',
        'https://i1.wp.com/food.theplainjane.com/wp-content/uploads/2015/08/chicken-schnitzel-special.jpg?w=800',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]
    ),
    new Recipe(
        'Big fat burger',
        'What else you need to say?',
        'https://cdn.newsapi.com.au/image/v1/dfd657934bf7bf648edbdc19670bf977?width=650',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]
        )
  ];


  getRecipies(){
    // return copy of the above array
    // instead of original array.
    // beacause by default js provide
    // reference of the variables.
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }


}