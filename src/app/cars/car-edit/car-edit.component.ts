import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";
import {ActivatedRoute} from "@angular/router";
import {Car} from "../models/car";

@Component({
  selector: 'cs-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadCar();
  }

  loadCar() {
    const id = +this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe((car) => this.car = car)
  }

}
