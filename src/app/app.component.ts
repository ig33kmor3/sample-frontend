import { Component } from '@angular/core';
import { ICar } from './model/ICar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ICar;
  date: number = Date.now();

  populateData(): void {
    this.data = {
      make: 'BMW',
      model: '3 Series',
      year: '2019'
    };
    this.date = Date.now();
  }
}
