import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public gallery: string[] = [];

  constructor(private imageService: ImageService){}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(g => {
      this.gallery = g;
    })
  }
}
