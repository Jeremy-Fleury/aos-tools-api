export interface DiceInput {
  type: 'D3' | 'D6';
}

export class Dice {
  type: 'D3' | 'D6';

  constructor(args: DiceInput) {
    this.type = args.type;
  }
}
