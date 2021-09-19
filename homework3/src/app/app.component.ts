import { Component, ElementRef } from '@angular/core';
import { Car } from './interfaces/car';
import { Order } from './interfaces/order';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recap-class';
  carToDisplay: Car;
  displayCarFlag: boolean = false;

  constructor(private carService: CarService, private elRef: ElementRef) {}

  cars: Car[] = this.carService.getCars();
  orders: Order[] = this.carService.getOrders();

  displayCar(car: Car) {
    this.displayCarFlag = true;
    this.carToDisplay = car;
  }

  addCar(e: Event) {
    const carId = this.elRef.nativeElement.querySelector('#carId').value;
    const carBrand = this.elRef.nativeElement.querySelector('#carBrand').value;
    const carModel = this.elRef.nativeElement.querySelector('#carModel').value;
    const carRating =
      this.elRef.nativeElement.querySelector('#carRating').value;

    const car = {
      id: carId,
      brand: carBrand,
      model: carModel,
      rating: carRating,
    };

    this.cars = [...this.cars, car];
    console.log(this.cars);
  }
}
