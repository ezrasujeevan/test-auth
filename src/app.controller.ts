import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RoleGuard, Roles } from '@code94labs/medlearning-common-test';
import { UserRole } from '@code94labs/medlearning-common-test/dist/class/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
