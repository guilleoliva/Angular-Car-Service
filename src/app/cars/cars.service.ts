import {Injectable} from '@angular/core';
import {Car} from "./models/car";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import "rxjs";

/*To bedzie nasz serwis, ktory wystawi
* nam prawdziwe dane pochodzace z serwera*/

@Injectable()
export class CarsService {

  private apiUrl = "http://localhost:3000/api/cars";

  /*wstrzykujemy http do konstruktora, ktory obsluguje nasze
  * podstawowe zapytania http np get post delete response*/
  constructor(private http: Http) {
  }

  /*Observable to tak jakby strumien danych*/

  /*http get -> bo pobieramy dane oczywiscie url to nasz endpoint(sciezka)
  * res.json - pozwala nam odczytac plik w postaci json
  * METODA getCars pobierze nam wszystkie samochody*/
  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl).map((res) => res.json())
  }


  getCar(id: number): Observable<Car> {
    return this.http.get(this.apiUrl + "/" + id).map((res) => res.json())
  }
}
