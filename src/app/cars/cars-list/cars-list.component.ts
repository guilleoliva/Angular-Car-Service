import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
/*klasa implementuje interfejs OnInit*/
export class CarsListComponent implements OnInit {

  /*to bedzie funkcja ktory bedzie obliczal nam
  * calkowita sume kosztow jaki musi zaplacic
  * klient za wynajem samochodu*/

  /*totalCost: number;* ---- nie uzywam w projekcie tego teraz, zobacze pozniej/ */


  /*tablica samochodów, która tworze na sztywno aby wyświetlić ją w html*/
  cars = [
    {
      id: 1,
      model: 'Opel Astra III',
      licensePlate: 'PKL 11G8',
      rentStart: '07-07-2017',
      rentEnd: '12-12-2017',
      client: {
        firstName: 'Sebastian',
        secondName: 'Woźniak',
        phoneNumber: '723844765',
        email: 'seba@seba.com',
      },
      cost: 10000,
      ifDiscount: false,

    },
    {
      id: 2,
      model: 'Opel Astra III',
      licensePlate: 'PKL 11G8',
      rentStart: '07-07-2017',
      rentEnd: '12-12-2017',
      client: {
        firstName: 'Sebastian',
        secondName: 'Woźniak',
        phoneNumber: '723844765',
        email: 'seba@seba.com',
      },
      cost: 25000,
      ifDiscount: true,

    },
    {
      id: 3,
      model: 'Opel Astra III',
      licensePlate: 'PKL 11G8',
      rentStart: '07-07-2017',
      rentEnd: '12-12-2017',
      client: {
        firstName: 'Sebastian',
        secondName: 'Woźniak',
        phoneNumber: '723844765',
        email: 'seba@seba.com',
      },
      cost: 97542,
      ifDiscount: false,

    }
  ]

  constructor() {
  }

  /*metoda ngOnInit interfejsu OnInit - jest to punkt zycia komponentu,
  * to co się dzieje przy inicjalizacji komponentu,
  * moge tu podac konkretne wywolania*/
  ngOnInit() {
    /* this.countTotalCost();  ---- tego nie uzylem bo nie jest mi potrzebne*/
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

}
