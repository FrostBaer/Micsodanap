import { Component } from '@angular/core';
import { Career } from 'src/app/models/career.type';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent {
  careers: Career[] = [];
  clickedJob: number = -1;

  constructor(private tourService: CareerService) { }

  ngOnInit(): void {
    this.tourService.getCareers().subscribe(t => { this.careers = t; });
  }

  public clicked(id: string){
    console.log(id + "Clicked!");
    this.clickedJob = +id;
  }
}
