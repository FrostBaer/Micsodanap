import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Tour } from '../models/tour.type';

import mockTours  from '../mocks/mockTours.json';
import mockCategories  from '../mocks/mockCategories.json';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  getTours() : Observable<Tour[]>{
    return of(mockTours.tours);
  }
  getTourById(id: string) {
    return of(mockTours.tours.find(t => t.id == id));
  }
  getCategories() : Observable<Category[]>{
    return of(mockCategories.categories);
  }
}
