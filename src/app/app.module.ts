import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelregistrationTravelComponent } from './travelregistration-travel/travelregistration-travel.component';
import { SearchplaceTravelComponent } from './searchplace-travel/searchplace-travel.component';
import { ViewdestinationTravelComponent } from './viewdestination-travel/viewdestination-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelregistrationTravelComponent,
    SearchplaceTravelComponent,
    ViewdestinationTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
