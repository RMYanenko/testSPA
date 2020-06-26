import {Component, OnInit, OnDestroy} from "@angular/core";
import {CocktailsService} from "src/app/services/cocktails.service";
import {Subscription} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit, OnDestroy {
  public drinks;
  public drinksValues;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private cocktailsService: CocktailsService
  ) {
  }

  ngOnInit(): void {
    this.cocktailsService.getFilterItem().subscribe(({drinks}) => {
      this.drinks = drinks;

      this.drinksValues = this.generateFilter(this.drinks);
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  generateFilter(data) {
    const filterDraft = {};
    data.forEach(item => {
      filterDraft[item.strCategory] = false;
    });
    return filterDraft;
  }

  onCheck(field) {
    // console.log(field);
    this.drinksValues[field] = !this.drinksValues[field]
  }

  apply() {
    for (const key in this.drinksValues) {
      if (key in this.drinksValues) {
        const value = this.drinksValues[key];
        if (value) {
          this.subscriptions.add(
            this.cocktailsService.getCocktailList(new HttpParams().set('c', key))
              .subscribe((data) => {
                this.cocktailsService.cocktailItems.push({
                  title: key,
                  ...data,
                });
                console.log(this.cocktailsService.cocktailItems);
              })
          );
        }
      }
    }
  }

}
