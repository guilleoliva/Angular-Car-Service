/*to jest plik TypeScript, który bedzie nam reprezetowac 1 samochod*/

import {Client} from "./client";

export interface Car {
  id: number;
  model: string;
  licensePlate: string;
  rentStart: string;
  rentEnd: string;
  client: Client; /*importujemy klienta z innego pliku TypeScript*/
  cost: number;
  ifDiscount: false;

}
