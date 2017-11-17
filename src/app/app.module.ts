import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsModule} from "./cars/cars.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  /* w glownym module appki musimy
  * zaimportowac nasze moduły, ktore chcemy
   * wyswietlic jak np Cars Module*/
  imports: [
    BrowserModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
