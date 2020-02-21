import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { GetPickUpLocationsService } from "./get-pick-up-locations.service";
import { of } from "rxjs";

function createResponse(body) {
  return of(body);
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const pickupLocations = [
  {
    country: "United Kingdom",
    lng: -2.27472,
    city: "Manchester",
    searchType: "L",
    alternative: ["GB,UK,England,Manchester Airport"],
    index: 1,
    bookingId: "airport-38566",
    placeType: "A",
    placeKey: "1472187",
    iata: "MAN",
    countryIso: "gb",
    locationId: "38566",
    name: "Manchester Airport",
    ufi: 900038550,
    isPopular: true,
    region: "Greater Manchester",
    lang: "en",
    lat: 53.3536
  },
  {
    country: "United Kingdom",
    lng: -2.23615,
    searchType: "L",
    alternative: ["GB,UK,England"],
    index: 2,
    bookingId: "city-2623580",
    placeType: "C",
    placeKey: "441725",
    countryIso: "gb",
    locationId: "20951",
    name: "Manchester",
    ufi: -2602512,
    isPopular: false,
    region: "Greater Manchester",
    lang: "en",
    lat: 53.4812
  },
  {
    country: "United States of America",
    lng: -73.9805,
    searchType: "L",
    alternative: ["US,US,USA,NY,New York Metropolitan area"],
    index: 3,
    bookingId: "district-929",
    placeType: "D",
    placeKey: "1471134",
    countryIso: "us",
    locationId: "-1",
    name: "Manhattan",
    ufi: 20088325,
    isPopular: false,
    region: "New York State",
    lang: "en",
    lat: 40.7573
  },
  {
    country: "Nicaragua",
    lng: -86.1681,
    city: "Managua",
    searchType: "L",
    alternative: ["NI,Augusto C. Sandino"],
    index: 4,
    bookingId: "airport-26411",
    placeType: "A",
    placeKey: "1472509",
    iata: "MGA",
    countryIso: "ni",
    locationId: "26411",
    name: "Managua Airport",
    ufi: 900038755,
    isPopular: false,
    lang: "en",
    lat: 12.1411
  },
  {
    country: "Nicaragua",
    lng: -86.2683,
    searchType: "L",
    alternative: ["NI"],
    index: 5,
    bookingId: "city-1798053",
    placeType: "C",
    placeKey: "886503",
    countryIso: "ni",
    locationId: "15416",
    name: "Managua",
    ufi: -1113265,
    isPopular: false,
    lang: "en",
    lat: 12.1508
  },
  {
    lng: -4.63451,
    city: "Derbyhaven",
    searchType: "L",
    alternative: ["IM"],
    index: 6,
    bookingId: "airport-19471",
    placeType: "A",
    placeKey: "1472264",
    iata: "IOM",
    countryIso: "im",
    locationId: "19471",
    name: "Ronaldsway Airport",
    ufi: 900038781,
    isPopular: false,
    region: "Isle of Man",
    lang: "en",
    lat: 54.0868
  }
];

describe("GetPickUpLocationsService", () => {
  let http: HttpClient;
  let service: GetPickUpLocationsService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        GetPickUpLocationsService,
        { provide: HttpClient, useClass: MockHttp }
      ],
      imports: [HttpClientTestingModule]
    });
    http = bed.get(HttpClient);
    service = TestBed.get(GetPickUpLocationsService);
  });

  it("should get locations", () => {
    spyOn(http, "get").and.returnValue(createResponse(pickupLocations));

    service.getLocationsAjax("Man", 6).subscribe(result => {
      expect(result).toEqual(pickupLocations);
    });
  });
});
