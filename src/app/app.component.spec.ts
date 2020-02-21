import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchPickUpLocationModule } from "./search-pick-up-location/search-pick-up-location.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SearchPickUpLocationModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
