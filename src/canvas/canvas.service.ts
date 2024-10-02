import { Injectable, Scope } from '@nestjs/common';
import { Canvas, createCanvas } from 'canvas';

@Injectable({ scope: Scope.DEFAULT })
export class CanvasService {
  private canvas: Canvas;
  private readonly longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
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
    console.log(ctx.measureText(this.longText));
    ctx.fillText(this.longText, 0, this.height / 2);
    ctx.fillStyle = 'red';
    ctx.textAlign = 'left';
    ctx.fillText('Hello World!', 0, 48, this.width / 2);
    const buffer = this.canvas.toDataURL('image/jpeg');
    return { data: buffer };
  }
}
