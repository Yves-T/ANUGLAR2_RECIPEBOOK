import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() recipeId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
