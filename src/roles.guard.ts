import { Roles, UserService } from '@code94labs/medlearning-common-test';
import { UserRole } from '@code94labs/medlearning-common-test/dist/class/user';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);
  constructor(
    private readonly reflector: Reflector,
    private readonly userService: UserService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    this.logger.debug('Checking role');
    const roles = this.reflector.get<UserRole[]>(Roles, context.getHandler());
    // this.logger.debug(`Roles: ${roles}`);
    // this.logger.debug(`User role: ${this.userService.getRole()}`);
    if (!roles) {
      return true;
    }
    return roles.some((role) => role === this.userService.getRole());
  }
}
