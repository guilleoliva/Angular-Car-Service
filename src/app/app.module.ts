import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsModule} from "./cars/cars.module";
import {CarsService} from "./cars/cars.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core-module/core-module.module";
import {AppRoutingModule} from "./app.routing.module";
import {CarsRoutingModule} from "./cars/cars-routing-module";


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
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
  /*tutaj - w providers - podajemy wszystkie servisy ktore mamy*/
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

