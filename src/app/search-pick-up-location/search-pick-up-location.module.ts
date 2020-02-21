// Core Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Components
import { SearchPickUpLocationComponent } from "./components/search-pick-up-location/search-pick-up-location.component";

// Services
import { GetPickUpLocationsService } from "./services/get-pick-up-locations.service";

@NgModule({
  declarations: [SearchPickUpLocationComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SearchPickUpLocationComponent],
  providers: [GetPickUpLocationsService]
})
export class SearchPickUpLocationModule {}
