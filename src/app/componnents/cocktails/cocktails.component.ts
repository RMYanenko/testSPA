import {Component, OnInit} from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { CocktailItem } from 'src/app/interfaces/cocktail-item';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  cocktailItems = [];

  constructor(
    private cocktailsService: CocktailsService
  ) { }

  ngOnInit(): void {
    this.cocktailItems = this.cocktailsService.cocktailItems;
  }
}
