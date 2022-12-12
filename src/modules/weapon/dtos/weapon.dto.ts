import { DiceD6 } from 'src/modules/dice/entities/dice-d6.entity';
import { WeaponType } from '../entities/weapons.entity';

export class WeaponDto {
  type: WeaponType;
  name: string;
  range: number;
  attacks: number;
  toHit: number;
  toWound: number;
  rend: number;
  damage: DiceD6;
}
