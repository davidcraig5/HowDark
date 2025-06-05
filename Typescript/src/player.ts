import { Creature } from './creature';
import { Stats } from './stats';
import { Weapon } from './weapon';

export class Player extends Creature {
  constructor(
    name: string,
    level: number,
    stats: Stats,
    ac: number,
    hitPoints: number,
    public weapon: Weapon
  ) {
    super(name, level, stats, ac, hitPoints);
  }
}
