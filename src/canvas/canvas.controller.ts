import { Controller, Get, Res } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { Response } from 'express';

@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Get()
  getImage() {
    return this.canvasService.generateCanvasImage();
  }

  @Get('download')
  downloadImage(@Res() res: Response) {
    const image = this.canvasService.generateCanvasImage();
    const buffer = Buffer.from(
      image.data.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );
    res.setHeader('Content-Type', 'image/png');

    res.end(buffer);
  }
}
