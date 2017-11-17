import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsListComponent} from './cars-list/cars-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  /*musimy wyeksportowac [exports: [...] nasz
  * komponent, poniewaz inaczej nie bedzie
  * go widac, Angular CLI za nas tego nie zrobi*/
  exports: [CarsListComponent],
  declarations: [CarsListComponent]
})
export class CarsModule {
}
