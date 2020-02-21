import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchPickUpLocationComponent } from "./search-pick-up-location.component";
import { GetPickUpLocationsService } from "../../services/get-pick-up-locations.service";

describe("SearchPickUpLocationComponent", () => {
  let component: SearchPickUpLocationComponent;
  let fixture: ComponentFixture<SearchPickUpLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPickUpLocationComponent],
      providers: [
        SearchPickUpLocationComponent,
        { provide: GetPickUpLocationsService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPickUpLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
