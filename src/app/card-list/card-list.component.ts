import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarServiceService } from '../car-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cars: Cars[] = [];

  constructor(private carService: CarServiceService, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(car => {
      this.cars = car
      console.log(this.cars);
    });
  }

  carForm = new FormGroup({
    model: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    if(this.carForm.status === 'VALID') {
    this.carService.addCar(
      {
        id: this.cars.length,
        model: this.carForm.value.model!,
        description: this.carForm.value.description!,
        type: this.carForm.value.type!,
        image: this.carForm.value.image!
      }
      
    );
    this.carForm.reset();
  }

  }
}

