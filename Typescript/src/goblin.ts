import { Monster } from './monster';
import { Stats } from './stats';
import { Weapon, RollModifier } from './weapon';
import { D8 } from './dice';

export class Goblin extends Monster {
  weapon: Weapon;

  constructor(name: string) {
    const stats = new Stats(10, 12, 12, 9, 9, 7);
    const hp = D8.roll() + 1;
    super(name, 1, stats, 12, hp);
    this.weapon = new Weapon('Dagger', D8, RollModifier.DEXTERITY);
  }
}
