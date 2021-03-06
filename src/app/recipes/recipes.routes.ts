import {Routes} from "@angular/router";


import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./r-recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const RECIPE_ROUTES: Routes = [
  {path: '', component: RecipeStartComponent},
  {path: 'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent}
];
