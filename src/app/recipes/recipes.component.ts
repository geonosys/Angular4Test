import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipeService } from './recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      )
  }

  // onSelectedRecipe(recipe: Recipe) {
  //   //console.log('Hi ' + recipe.name);
  // }
  
  // onRecipeWasSelected(varj) {
  //     //console.log(varj);
  //     this.recipeIsSelected = true;
  //     this.selectedRecipe = varj;
  // }

}
