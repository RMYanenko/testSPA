import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterItem } from '../interfaces/filter-item';
import { CocktailItem } from '../interfaces/cocktail-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  nameFilters = 'drinks'

  constructor(private http: HttpClient) { }

  getFilterItem(): Observable<FilterItem[]>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .pipe(
      map(response => response[this.nameFilters])
    )
  }

  getCocktailList() :Observable<CocktailItem[]>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink')
    .pipe(
      map(response => response[this.nameFilters])
    )
  }
}
