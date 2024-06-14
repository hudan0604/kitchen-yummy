import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { RecipeModelClass } from '../../models/recipe.models';

@Component({
  selector: 'kitcheyummy-recipe-card',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  public recipe = input.required<RecipeModelClass>();
  public dimensions = input.required<Record<string, string>>();
}
