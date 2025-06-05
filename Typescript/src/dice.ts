export class Die {
  constructor(private sides: number) {}

  roll(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

export const D20 = new Die(20);
export const D8 = new Die(8);
