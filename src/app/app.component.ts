import { Component } from '@angular/core';
import { ICar } from './model/ICar';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ICar[];
  date: number = Date.now();

  constructor(private carService: CarService) { }

  populateData(): void {
    this.carService.getCars$().subscribe(
      (cars) => this.data = cars,
      (error) => alert('Unable to contact car service!')
    );
    this.date = Date.now();
  }
}
