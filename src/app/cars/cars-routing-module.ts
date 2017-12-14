/*prawidlowo powinno wygladac tak ze kazdy plik ma swoj routing*/

import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {CarDetailComponent} from "./car-detail/car-detail.component";

/*przy id jest dwukropek, to znaczy ze bedzie to dowolna liczba*/
const CARS_ROUTES: Route[] = [
  {path: 'cars/:id', component: <any>CarDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})


export class CarsRoutingModule {
}
