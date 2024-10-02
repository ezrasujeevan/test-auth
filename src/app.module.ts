import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

import { canvasModule } from './canvas/canvas.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), canvasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
