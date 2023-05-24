import { Injectable } from '@angular/core';
import {  Cars } from './cars';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  CARS:  Cars[] = [
    {
      id: 0,
      model: 'FRANCESCO VIRGOLINI',
      description: 'CON EL NUMERO, CHINKUENTA Y CHINKUE ',
      type: 'LA MAQUINA MA VELOZ DE TOTE ITALIE',
      image: 'https://media.tenor.com/0YRhvJ9mlwwAAAAC/francesco-virgolini.gif'
    },
    {
      id: 1,
      model: 'Chebrole Onyx',
      description: 'Tremendo auto pa hacer de onyx',
      type: 'Alto autito',
      image: '../../assets/Onix.jpg'
    },
    {
      id: 2,
      model: 'Chebrole Onyx',
      description: 'Tremendo auto pa hacer de onyx',
      type: 'Alto autito',
      image: '../../assets/susuki.jpg'
    },
    {
      id: 3,
      model: 'Chebrole Onyx',
      description: 'Tremendo auto pa hacer de onyx',
      type: 'Alto autito',
      image: '../../assets/Onix.jpg'
    },
    {
      id: 4,
      model: 'Chebrole Onyx',
      description: 'Tremendo auto pa hacer de onyx',
      type: 'Alto autito',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*  '
    }
  ]
  constructor() { }

  getCars(): Observable<Cars[]> {
    return of(this.CARS);
  }

  deleteCar(car: Cars): void {
    this.CARS.splice(this.CARS.indexOf(car), 1);
  }

  addCar(car: Cars): void {
    this.CARS.push(car);
  }
}
