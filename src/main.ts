import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const reflector = app.get(Reflector);
  // const userService = await app.resolve(UserService);
  // app.useGlobalGuards(new RoleGuard(reflector, userService));
  await app.listen(5000);
}
bootstrap();
