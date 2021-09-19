import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { Order } from 'src/app/interfaces/order';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() boundOrder: Order;
  @Output() ngDisplayCar = new EventEmitter<Car>();

  public cars = [];

  constructor() {}

  ngOnInit(): void {}

  displayCar(car: Car) {
    this.ngDisplayCar.emit(car);
  }
}
