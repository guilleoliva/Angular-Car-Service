import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../models/car";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'cs-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car;
  carForm: FormGroup;


  constructor(private carsService: CarsService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  loadCar() {
    this.car = this.route.snapshot.data['car'];
  }

  updateCar() {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: [this.car.model, Validators.required],
      type: this.car.type,
      year: this.car.year,
      licensePlate: [this.car.licensePlate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      color: this.car.color,
      rentStart: this.car.rentStart,
      rentEnd: this.car.rentEnd,
      power: this.car.power,
      clientFirstName: this.car.clientFirstName,
      clientSecondName: this.car.clientSecondName,
      clientPhoneNumber: this.car.clientPhoneNumber,
      clientEmail: this.car.clientEmail,
      cost: this.car.cost,
      ifDiscount: this.car.ifDiscount,
    })
  }

}
