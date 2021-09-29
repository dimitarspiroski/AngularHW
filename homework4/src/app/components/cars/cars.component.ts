import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  constructor(private _cs: CarService, private route: ActivatedRoute) {}
  cars: Car[];

  ngOnInit(): void {
    this.cars = this._cs.getCars();
  }

  orderedCars(car: Car) {
    this._cs.orderCar(car);
  }
}
