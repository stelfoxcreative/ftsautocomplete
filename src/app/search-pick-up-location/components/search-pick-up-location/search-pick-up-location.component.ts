import { Component, AfterViewInit } from "@angular/core";
import { GetPickUpLocationsService } from "../../services/get-pick-up-locations.service";
import { searchLocation } from "../../models/search-pick-up-location.interface";

import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from "rxjs/operators";
import { AjaxResponse } from "rxjs/ajax";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Component({
  selector: "search-pick-up-location",
  templateUrl: "./search-pick-up-location.component.html",
  styleUrls: ["./search-pick-up-location.component.scss"]
})
export class SearchPickUpLocationComponent implements AfterViewInit {
  public searchResults: Array<searchLocation>;
  public locationTypes: Map<string, string>;

  constructor(private locationService: GetPickUpLocationsService) {
    this.locationTypes = new Map([
      ["A", "Airport"],
      ["C", "City"],
      ["T", "Station"]
    ]);
  }

  ngAfterViewInit() {
    const searchBox = document.getElementById(
      "fts-pickupLocation"
    ) as HTMLInputElement;
    searchBox.focus();

    const typeahead = fromEvent(searchBox, "input").pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      tap(text => {
        if (text.length <= 1) return (this.searchResults = null);
      }),
      filter(text => text.length >= 2),
      debounceTime(300),
      // distinctUntilChanged(),
      switchMap(text => this.locationService.getLocationsAjax(text, 6))
    );

    typeahead.subscribe((data: any) => {
      // If no results are found, then use the default error message provided
      if (searchBox.value.length <= 1) return (this.searchResults = null);

      // this.searchResults = data.response.results.docs;
      this.searchResults = data.results.docs;
      return this.searchResults;
    });
  }
}
