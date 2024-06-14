import { Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';

export const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: '**', redirectTo: 'recipes' },
];
