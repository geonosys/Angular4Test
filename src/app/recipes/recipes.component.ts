import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeIsSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    //console.log('Hi ' + recipe.name);
  }

  onRecipeWasSelected(varj) {
      //console.log(varj);
      this.recipeIsSelected = true;
      this.selectedRecipe = varj;
  }

}
