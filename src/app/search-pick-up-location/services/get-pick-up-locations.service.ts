import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetPickUpLocationsService {
  constructor(private http: HttpClient) {}

  getLocationsAjax(
    searchTerm: string,
    resultsRequired: number = 10
  ): Observable<object> {
    const baseAppUrl = "https://ftsautocomplete.herokuapp.com/";
    const proxyUrl = "?https://www.rentalcars.com/FTSAutocomplete.do?";

    const searchUrl = `${baseAppUrl}${proxyUrl}solrIndex=fts_en&solrRows=${resultsRequired}&solrTerm=${searchTerm}&cor=gb`;

    return this.http.get(searchUrl);
  }
}
