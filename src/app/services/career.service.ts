import { Injectable } from '@angular/core';
import mockCareer  from '../mocks/mockCareer.json';
import { Observable, of } from 'rxjs';

import { Career } from '../models/career.type';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor() { }

  public getCareers() : Observable<Career[]>{
    return of(mockCareer.career);
  }
}
