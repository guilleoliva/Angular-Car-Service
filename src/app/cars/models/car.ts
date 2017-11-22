/*to jest plik TypeScript, który bedzie nam reprezetowac 1 samochod*/

export interface Car {
  id: number;
  model: string;
  type: string;
  licensePlate: string;
  rentStart: string;
  rentEnd: string;
  color: string;
  power: number;
  clientFirstName: string;
  clientSecondName: string;
  clientPhoneNumber: string;
  clientEmail: string;
  cost: number;
  ifDiscount: false;
}
