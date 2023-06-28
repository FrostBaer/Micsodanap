import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import mockGallery  from '../mocks/mockGallery.json';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public getImages() : Observable<string[]>{
    console.log(mockGallery.images[0]);
    return of(mockGallery.images);
  }
}
