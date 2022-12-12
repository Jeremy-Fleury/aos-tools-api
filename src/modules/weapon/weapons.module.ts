import { Module } from '@nestjs/common';
import { WeaponController } from './controllers/weapon.controller';
import { WeaponInMemoryRepository } from './repositories/weapon-inmemory.repository';
import { WeaponRepository } from './repositories/weapon.repository';
import { WeaponSeed } from './seeds/weapon.seed';
import { WeaponCreateUsecase } from './usecases/weapon-create.usecase';
import { WeaponFindAllUsecase } from './usecases/weapon-find-all.usecase';

@Module({
  imports: [],
  controllers: [WeaponController],
  providers: [
    {
      provide: WeaponRepository,
      useValue: new WeaponInMemoryRepository(),
    },
    WeaponCreateUsecase,
    WeaponFindAllUsecase,
    WeaponSeed,
  ],
  exports: [WeaponSeed],
})
export class WeaponsModule {}
