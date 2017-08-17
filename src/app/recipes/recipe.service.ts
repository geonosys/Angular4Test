import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model' ;
import { Ingredient } from '../shared/ingredient.model' ;

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Toad in the hole',
      'A lovely main meal - awesome',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Toad_in_the_hole.jpg',
    [
      new Ingredient("Sausage", 10),
      new Ingredient("Potato", 30)      
    ]
    ),
    new Recipe('Carrot cake',
      'A lovely sweet desert - great',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Rueblitorte.jpg',
      [
        new Ingredient("Carrots", 50),
        new Ingredient("Sugar", 300)      
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  

}

