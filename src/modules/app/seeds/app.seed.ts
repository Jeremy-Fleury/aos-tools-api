import { Injectable } from '@nestjs/common';
import { WeaponSeed } from '../../../modules/weapon/seeds/weapon.seed';

@Injectable()
export class AppSeed {
  constructor(private weaponSeed: WeaponSeed) {}

  async execute(): Promise<void> {
    this.weaponSeed.execute();
  }
}
