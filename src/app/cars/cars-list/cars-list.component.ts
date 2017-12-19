import {Component, OnInit} from '@angular/core';
import {Car} from "../models/car";
import {CarsService} from "../cars.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
/*klasa implementuje interfejs OnInit*/
export class CarsListComponent implements OnInit {

  /*to bedzie funkcja ktory bedzie obliczala nam
  * calkowita sume kosztow jaki musi zaplacic
  * klient za wynajem samochodu*/

  /*totalCost: number;* ---- nie uzywam w projekcie tego teraz, zobacze pozniej/ */


  /*tablica samochodów, która tworze na sztywno aby wyświetlić ją w html - usunalem stworzone samochody
  * poniewaz teraz wszystko bedzie wczytywane z bazy*/
  cars: Car[];

  carForm: FormGroup;

  /*serwisy wstrzykujemy do konstruktorow naszych componentow*/
  constructor(private carsService: CarsService, private formBuilder: FormBuilder) {
  }

  /*metoda ngOnInit interfejsu OnInit - jest to punkt zycia komponentu,
  * to co się dzieje przy inicjalizacji komponentu,
  * moge tu podac konkretne wywolania*/
  ngOnInit() {
    /* this.countTotalCost();  ---- tego nie uzylem bo nie jest mi potrzebne*/
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  /*to bedzie metoda do obliczenia wlasnie calkowitego kosztu
  * nie bedzie nic zwracac*
  * PAMIETAJ ze zeby odwolac sie po za swojego zasiegu
  * zawsze musisz dodac slowko This!!!!
  *
  * Nie uzylem tej metody bo nie bedzie mi potrzebna w projekcie*/

  /*countTotalCost(): void {
    this.totalCost = this.cars.map((car) => car.cost).reduce((prev, next) => prev + next);
  }*/

  /*metoda
  * subscribe - mozemy sie subskrybowac do strumeinia danych, czyli
  * beda one odebrane z naszego parametru cars*/
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => this.cars = cars)
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
    });
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      year: '',
      licensePlate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      color: '',
      rentStart: '',
      rentEnd: '',
      power: '',
      clientFirstName: '',
      clientSecondName: '',
      clientPhoneNumber: '',
      clientEmail: '',
      cost: '',
      ifDiscount: '',
    })
  }

}
