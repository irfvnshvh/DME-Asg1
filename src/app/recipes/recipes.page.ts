import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
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
  ];

  constructor(private recipesService: RecipesService) {
    
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
