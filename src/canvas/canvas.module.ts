import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';

@Module({
  imports: [],
  controllers: [CanvasController],
  providers: [CanvasService],
  exports: [],
})
export class canvasModule {}
