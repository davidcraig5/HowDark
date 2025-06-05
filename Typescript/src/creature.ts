import { Stats } from './stats';

export abstract class Creature {
  constructor(
    public name: string,
    public level: number,
    public stats: Stats,
    public ac: number,
    public hitPoints: number
  ) {}

  get alive(): boolean {
    return this.hitPoints > 0;
  }

  takeDamage(amount: number): void {
    this.hitPoints = Math.max(0, this.hitPoints - amount);
  }
}
