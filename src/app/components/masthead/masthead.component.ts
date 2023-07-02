import { Component } from '@angular/core';
import { Category } from 'src/app/models/tour.type';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html'
})
export class MastheadComponent {
  categories!: Category[];

  constructor(private tourService: TourService){
    this.tourService.getCategories().subscribe(c => this.categories = c);
  }
}
