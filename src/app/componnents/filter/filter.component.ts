import { Component, OnInit } from '@angular/core';
import { FilterItem } from 'src/app/interfaces/filter-item';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterItem: FilterItem[] = [];

  constructor(
    private httpServise: HttpService
  ) { }

  ngOnInit(): void {
    this.httpServise.getFilterItem().subscribe(
      data => this.filterItem = data
    )

   }

}
