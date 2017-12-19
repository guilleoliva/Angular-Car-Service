/*to jest plik TypeScript, który bedzie nam reprezetowac 1 samochod*/

export interface Car {
  id: number;
  model: string;
  type: string;
  year: string;
  licensePlate: string;
  color: string;
  rentStart: string;
  rentEnd: string;
  power: number;
  clientFirstName: string;
  clientSecondName: string;
  clientPhoneNumber: string;
  clientEmail: string;
  cost: number;
  ifDiscount: false;
}
