import { randomUUID } from 'crypto';
import { DiceD6 } from 'src/modules/dice/entities/dice-d6.entity';

export type WeaponType = 'melee' | 'ranged';

export type WeaponEntityInput = Omit<WeaponEntity, 'id'>;

export class WeaponEntity {
  id: string;
  type: WeaponType;
  name: string;
  range: number;
  attacks: number;
  toHit: number;
  toWound: number;
  rend: number;
  damage: DiceD6 | number;

  constructor(args: WeaponEntityInput) {
    this.id = randomUUID();
    this.type = args.type;
    this.name = args.name;
    this.range = args.range;
    this.attacks = args.attacks;
    this.toHit = args.toHit;
    this.toWound = args.toWound;
    this.rend = args.rend;
    this.damage = args.damage;
  }
}
