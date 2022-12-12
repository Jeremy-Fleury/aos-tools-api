import { Module } from '@nestjs/common';

import { WeaponsModule } from '../weapon/weapons.module';
import { AppController } from './controllers/app.controller';
import { AppSeed } from './seeds/app.seed';

@Module({
  imports: [WeaponsModule],
  providers: [AppController, AppSeed],
})
export class AppModule {}
