import { Dice } from './dice';

export class DiceD6 extends Dice {
  constructor() {
    super({ type: 'D6' });
  }

  roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
