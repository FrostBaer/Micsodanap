import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../models/tour.type';

import mockTours  from '../mocks/mockTours.json';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getTours() : Observable<Tour[]>{
    return of(mockTours.tours);
  }
}
