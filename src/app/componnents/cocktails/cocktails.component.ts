import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CocktailItem } from 'src/app/interfaces/cocktail-item';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  cocktailItem:CocktailItem[] = [];

  constructor(
    private httpServise: HttpService
  ) { }

  ngOnInit(): void {
    this.httpServise.getCocktailList()
    .subscribe(
      data => this.cocktailItem = data
    )
  }
}
