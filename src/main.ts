import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { AppSeed } from './modules/app/seeds/app.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  app.get(AppSeed).execute();
}

bootstrap();
