import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";
import {ActivatedRoute} from "@angular/router";
import {Car} from "../models/car";

@Component({
  selector: 'cs-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

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
