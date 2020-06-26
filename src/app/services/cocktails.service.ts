import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {FilterItem} from "../interfaces/filter-item";

@Injectable({
  providedIn: "root",
})
export class CocktailsService {
  public cocktailItems = [];

  constructor(private http: HttpClient) {
  }

  getFilterItem(): Observable<FilterItem> {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list") as Observable<FilterItem>
  }

  getCocktailList(params: HttpParams) {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink", {
        params
      });
  }
}
