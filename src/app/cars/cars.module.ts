import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsListComponent} from './cars-list/cars-list.component';
import {ShareModule} from "../share-module/share-module.module";
import {CarDetailComponent} from './car-detail/car-detail.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { CarEditComponent } from './car-edit/car-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
    ReactiveFormsModule
  ],
  /*musimy wyeksportowac [exports: [...] nasz
  * komponent, poniewaz inaczej nie bedzie
  * go widac, Angular CLI za nas tego nie zrobi*/
  exports: [CarsListComponent],
  declarations: [CarsListComponent, CarDetailComponent, CarEditComponent]
})
export class CarsModule {
}
