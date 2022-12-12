import { Injectable } from '@nestjs/common';
import { WeaponEntity, WeaponEntityInput } from '../entities/weapons.entity';
import { WeaponRepository } from '../repositories/weapon.repository';

@Injectable()
export class WeaponCreateUsecase {
  constructor(private weaponRepository: WeaponRepository) {}

  async execute(args: WeaponEntityInput) {
    const weapon = new WeaponEntity(args);

    return this.weaponRepository.add(weapon);
  }
}
