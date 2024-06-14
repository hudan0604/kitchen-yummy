import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { data } from '../../shared/data/data';
import { RecipeCardComponent } from '../../shared/ui/recipe-card/recipe-card.component';

@Component({
  selector: 'kitcheyummy-recipes',
  standalone: true,
  imports: [KeyValuePipe, TitleCasePipe, RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  public data = data;
}
