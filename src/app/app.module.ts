// Core Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Custom Modules
import { SearchPickUpLocationModule } from "./search-pick-up-location/search-pick-up-location.module";

// Components
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SearchPickUpLocationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
