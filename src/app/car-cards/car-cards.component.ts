import { Component, Input } from '@angular/core';
import { Cars } from '../cars';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.css']
})
export class CarCardsComponent {
  @Input()
  car!: Cars;

  constructor(private carService: CarServiceService) { }

deleteButton(): void {
  this.carService.deleteCar(this.car);
}

  
}