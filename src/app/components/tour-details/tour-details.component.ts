import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from 'src/app/models/tour.type';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html'
})
export class TourDetailsComponent{
  public tour!: Tour;

  constructor(private tourService: TourService, 
    private actRoute: ActivatedRoute){
      this.getTourById();
    }

  private getTourById() {
    this.actRoute.params.subscribe(params => {
      let id = params['id'];
      this.tourService.getTourById(id).subscribe(tour => {
        if(tour){
          this.tour = tour;
        }        
        console.log(tour)
      });
    });
  }
}
