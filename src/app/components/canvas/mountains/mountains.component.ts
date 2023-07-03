import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html'
})
export class MountainsComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input() width!: number;
  @Input() height!: number;

  private ctx!: CanvasRenderingContext2D | null;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
    this.createStyle();
    this.animate();
  }

  private animate(){}
  private createStyle(){}
}
