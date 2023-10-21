import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    RecipeDetailComponent,
  ],
  imports: [
    CommonModule, 
    RecipeRoutingModule
  ],
  exports: [
    RecipeListComponent,
  ]
})
export class RecipeModule { }
