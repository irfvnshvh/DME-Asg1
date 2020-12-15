import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'water',
      amount: '410ml',
    },
    {
      id: 'energy drink',
      amount: '5310ml',
    },
    {
      id: 'coffee',
      amount: '510ml',
    },
  ]

  constructor() { 
  }

  getAllRecipes(){ 
    console.log ([...this.recipes]);
    
    return [...this.recipes];
  }

  getRecipe(recipeID: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeID;
    })}
  }
}
