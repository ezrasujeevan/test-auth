import { Injectable, Scope } from '@nestjs/common';
import { Canvas, createCanvas } from 'canvas';

@Injectable({ scope: Scope.DEFAULT })
export class CanvasService {
  private canvas: Canvas;
  private readonly width = 1056;
  private readonly height = 816;
  constructor() {
    this.canvas = createCanvas(this.width, this.height);
  }

  generateCanvasImage() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.font = '48px serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'black';
    ctx.fillText('Hello World!\n line 1', this.width / 2, this.height / 2);
    ctx.fillStyle = 'red';
    ctx.textAlign = 'start';
    ctx.fillText('Hello World! \n line 2', this.width / 2, this.height / 2, 10);
    const buffer = this.canvas.toDataURL('image/jpeg');
    return { data: buffer };
  }
}
