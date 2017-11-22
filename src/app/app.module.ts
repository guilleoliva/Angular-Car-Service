import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsModule} from "./cars/cars.module";
import {CarsService} from "./cars/cars.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  /* w glownym module appki musimy
  * zaimportowac nasze moduły, ktore chcemy
   * wyswietlic jak np Cars Module*/
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule,
    FormsModule
  ],
  /*tutaj - w providers - podajemy wszystkie servisy ktore mamy*/
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
