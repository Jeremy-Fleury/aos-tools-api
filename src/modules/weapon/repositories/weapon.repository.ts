import { Injectable } from '@nestjs/common';
import { WeaponEntity, WeaponEntityInput } from '../entities/weapons.entity';

@Injectable()
export abstract class WeaponRepository {
  abstract add(args: WeaponEntityInput): Promise<WeaponEntity>;

  abstract findAll(): Promise<WeaponEntity[]>;
}
