import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html'
})
export class WaterComponent implements OnInit {
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

  private animate() {
    if (this.ctx) {
      let waves: Wave[] = [];
      //big waves
      let rad = 20;
      let h = 300;
      for (let i = 0; i < 5; i++) {
        waves.push(new Wave(
          this.ctx, 150, 0,
          h, rad, this.random(1, 2) % 2 == 0, this.random(8, 12)
        ));
        rad += 5;
        h += 40;
      }
      //middle waves
      rad = 10;
      h = 160;
      for (let i = 0; i < 8; i++) {
        waves.push(new Wave(
          this.ctx, 150, 0,
          h, rad, this.random(1, 2) % 2 == 0, 3
        ));
        rad += 2;
        h += 20;
      }
      //small waves
      rad = 10;
      h = 50;
      for (let i = 0; i < 8; i++) {
        waves.push(new Wave(
          this.ctx, this.random(30, 50), 0,
          h, rad, this.random(1, 2) % 2 == 0, 2
        ));
        rad += 1;
        h += 15;
      }
      //tiny waves
      rad = 2;
      h = 5;
      for (let i = 0; i < 5; i++) {
        waves.push(new Wave(
          this.ctx, 120, 0,
          h, rad, this.random(1, 2) % 2 == 0, 1
        ));
        rad += 1;
        h += 8;
      }

      setInterval(() => {
        waves.forEach(element => {
          element.draw();
        });
      }, 100);
    }
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private createStyle() {
    // Background gradient
    const grd = this.ctx!.createLinearGradient(0, 0, 450,0);
    // grd.addColorStop(0, "#a4f5c1");
    // grd.addColorStop(0.7, "white");
    // grd.addColorStop(1, "#a4f5c1");    
    // this.ctx!.fillStyle = grd;
    // this.ctx!.fillRect(0, 0, 450, 450);
    
    // Wave gradient
    grd.addColorStop(0, '#66a4de');
    grd.addColorStop(0.2, 'cyan');
    grd.addColorStop(0.5, '#77f7a3');
    grd.addColorStop(0.7, 'cyan');
    grd.addColorStop(1, '#66a4de');
    this.ctx!.strokeStyle = grd;
  }
}

export class Wave {
  private start_x: number;
  private end_x: number;

  constructor(
    private ctx: CanvasRenderingContext2D,
    private wave_cnt: number = 3,
    private pos_x: number = 0,
    private pos_y: number = 0,
    private radius: number = 10,
    private counterclockwise: boolean = false,
    private line_width: number = 1
  ) {
    this.start_x = pos_x;
    this.end_x = pos_x + wave_cnt * radius * 2;
  }

  public draw() {
    if (this.pos_x > this.end_x) return;

    this.ctx.lineWidth = this.line_width;
    this.ctx.beginPath();
    if (this.pos_x == this.start_x) {
      this.drawFirstWave();
    }
    if (this.pos_x < this.end_x) {
      this.drawWave();
    }
    if (this.pos_x == this.end_x) {
      this.drawLastWave();
    }
    this.ctx.stroke();
  }

  public drawWave() {
    this.ctx.moveTo(this.pos_x + this.radius, this.pos_y);
    this.ctx.arc(this.pos_x, this.pos_y, this.radius, 0, Math.PI, this.counterclockwise);
    this.pos_x += 2 * this.radius;
    this.counterclockwise = !this.counterclockwise;
  }

  public drawFirstWave() {
    let pos_x = this.pos_x - this.radius * 2;
    let counterclockwise = !this.counterclockwise;

    this.ctx.moveTo(this.pos_x - this.radius, this.pos_y);
    this.ctx.arc(pos_x, this.pos_y, this.radius, 0,
      (function (c) {
        if (c) return Math.PI * 1.5;
        else return Math.PI / 2;
      })(counterclockwise), counterclockwise);
  }

  public drawLastWave() {
    this.ctx.moveTo(this.pos_x, this.counterclockwise ? this.pos_y - this.radius : this.pos_y + this.radius);
    this.ctx.arc(this.pos_x, this.pos_y, this.radius,
      (function (c) {
        if (c) return Math.PI * 1.5
        else return Math.PI / 2;
      })(this.counterclockwise),
      Math.PI, this.counterclockwise);
  }
}
