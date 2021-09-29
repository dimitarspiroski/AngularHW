import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-ordered-cars',
  templateUrl: './ordered-cars.component.html',
  styleUrls: ['./ordered-cars.component.css'],
})
export class OrderedCarsComponent implements OnInit {
  orders: Car[];

  constructor(private _cs: CarService) {}

  orderedCars: Car[];

  ngOnInit(): void {
    this.orderedCars = this._cs.orders;
  }
}
