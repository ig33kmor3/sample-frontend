import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from '../model/ICar';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars$(): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${environment.api}/v1/cars`);
  }
}
