import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'all',
    component: RecipeListComponent,
  },
  {
    path: 'create',
    component: NewRecipeComponent,
  },
  {
    path: 'edit',
    component: EditRecipeComponent,
  },
  {
    path: 'detail/:id',
    component: RecipeDetailComponent,
  },
];

export const RecipeRoutingModule = RouterModule.forChild(routes);
