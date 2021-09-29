import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  private cars: Car[] = [
    {
      id: '1',
      name: 'Opel',
      model: 'Astra',
      imgUrl:
        'https://media.hatla2eestatic.com/uploads/ncarteraz/24157/big-up_fa94cd386d49eebf43c22a657d6f8bc7.png',
      yearOfProduction: new Date('2021'),
      price: 49.99,
    },
    {
      id: '2',
      name: 'Hyundai',
      model: 'Tucson',
      imgUrl:
        'https://www.ccarprice.com/products/Hyundai-Tucson-Value-AWD-2021.jpg',
      yearOfProduction: new Date('2021'),
      price: 99.99,
    },
    {
      id: '3',
      name: 'Volkswagen',
      model: 'Golf',
      imgUrl:
        'https://www.pngkey.com/png/detail/154-1544612_military-offer-white-2019-volkswagen-golf.png',
      yearOfProduction: new Date('2019'),
      price: 79.99,
    },
    {
      id: '4',
      name: 'Mercedes',
      model: 'B220',
      imgUrl:
        'https://cloud.leparking.fr/2020/09/07/12/17/mercedes-classe-b-200-7g-dct-progressive-line-edition-5-portes_7757499078.jpg',
      yearOfProduction: new Date('2020'),
      price: 89.99,
    },
    {
      id: '5',
      name: 'Toyota',
      model: 'Yaris',
      imgUrl:
        'https://www.autodata1.com/media/toyota/pics/toyota-yaris-xp210-%5B33477%5D.jpg',
      yearOfProduction: new Date('2020'),
      price: 39.99,
    },
  ];

  orders: Car[] = [];

  getCars() {
    return this.cars;
  }

  orderCar(car: Car) {
    this.orders.push(car);
    console.log(car);
  }
}
