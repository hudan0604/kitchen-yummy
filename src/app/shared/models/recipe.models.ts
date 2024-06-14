export interface RecipeModelI {
  title: string;
  url: string;
}

export class RecipeModelClass implements RecipeModelI {
  constructor(
    public title: string,
    public url: string,
    public isHovered: boolean
  ) {}
}
