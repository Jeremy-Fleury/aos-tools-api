import { Injectable } from '@nestjs/common';
import { DiceD6 } from '../../dice/entities/dice-d6.entity';
import { WeaponEntity } from '../entities/weapons.entity';
import { WeaponRepository } from '../repositories/weapon.repository';

@Injectable()
export class WeaponSeed {
  constructor(private weaponRepository: WeaponRepository) {}

  async execute(): Promise<void> {
    const weapons = [
      new WeaponEntity({
        type: 'melee',
        name: "Soulguard's halberd",
        range: 1,
        attacks: 3,
        toHit: 3,
        toWound: 3,
        rend: -1,
        damage: 2,
      }),
      new WeaponEntity({
        type: 'melee',
        name: 'Sigmarite warblade',
        range: 1,
        attacks: 4,
        toHit: 3,
        toWound: 3,
        rend: -1,
        damage: 2,
      }),
      new WeaponEntity({
        type: 'melee',
        name: 'Meteoric Hammer',
        range: 1,
        attacks: 3,
        toHit: 3,
        toWound: 3,
        rend: -1,
        damage: 2,
      }),
      new WeaponEntity({
        type: 'ranged',
        name: 'Thengavar',
        range: 18,
        attacks: 1,
        toHit: 2,
        toWound: 2,
        rend: -2,
        damage: new DiceD6(),
      }),
      new WeaponEntity({
        type: 'ranged',
        name: 'Terminus Greatbow',
        range: 30,
        attacks: 2,
        toHit: 3,
        toWound: 2,
        rend: -3,
        damage: 3,
      }),
    ];

    for (const weapon of weapons) {
      await this.weaponRepository.add(weapon);
    }
  }
}
