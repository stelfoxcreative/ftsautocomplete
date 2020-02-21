export interface searchLocationResults {
  isGooglePowered: boolean;
  docs: Array<searchLocation>;
  numFound: number;
}

export interface searchLocation {
  country?: string;
  lng: number;
  city: string;
  searchType: string;
  alternative: Array<string>;
  index: number;
  bookingId: string;
  placeType: string;
  placeKey: string;
  iata: string;
  countryIso: string;
  locationId: string;
  name: string;
  ufi: number;
  isPopular: boolean;
  region: string;
  lang: string;
  lat: number;
}
