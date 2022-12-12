import { Injectable } from '@nestjs/common';
import { WeaponEntity } from '../entities/weapons.entity';
import { WeaponRepository } from '../repositories/weapon.repository';

@Injectable()
export class WeaponFindAllUsecase {
  constructor(private readonly weaponRepository: WeaponRepository) {}

  async execute(): Promise<WeaponEntity[]> {
    const weapons = await this.weaponRepository.findAll();

    return weapons;
  }
}
