import { Injectable } from '@nestjs/common';
import { WeaponEntity, WeaponEntityInput } from '../entities/weapons.entity';
import { WeaponRepository } from './weapon.repository';

@Injectable()
export class WeaponInMemoryRepository implements WeaponRepository {
  private weapons: WeaponEntity[] = [];

  async add(args: WeaponEntityInput) {
    const weapon = new WeaponEntity(args);

    this.weapons.push(weapon);

    return weapon;
  }

  async findAll() {
    return this.weapons;
  }
}
