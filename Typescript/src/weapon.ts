import { Creature } from './creature';
import { Die, D20 } from './dice';
import { Stats } from './stats';

export enum RollModifier {
  STRENGTH,
  DEXTERITY
}

export class Weapon {
  constructor(
    public name: string,
    public damage: Die,
    public modifier: RollModifier
  ) {}

  attack(attacker: Creature, target: Creature): string {
    const roll = D20.roll();
    let mod = 0;
    if (this.modifier === RollModifier.STRENGTH) {
      mod = attacker.stats.strengthMod;
    } else if (this.modifier === RollModifier.DEXTERITY) {
      mod = attacker.stats.dexterityMod;
    }

    if (roll === 20) {
      const damage = this.damage.roll() + this.damage.roll();
      target.takeDamage(damage);
      return `${attacker.name} critically hits ${target.name} for ${damage} damage`;
    } else if (roll + mod >= target.ac) {
      const damage = this.damage.roll();
      target.takeDamage(damage);
      return `${attacker.name} hits ${target.name} for ${damage} damage`;
    } else {
      return `${attacker.name} misses ${target.name}`;
    }
  }
}
