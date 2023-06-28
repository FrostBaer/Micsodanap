import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tour.type';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html'
})
export class TourListComponent implements OnInit{
  tours: Tour[] = [];

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getTours().subscribe(t => { this.tours = t; });
  }

  public navigateTo(){

  }
}
