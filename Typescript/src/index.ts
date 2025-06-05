import { Stats } from './stats';
import { Player } from './player';
import { Weapon, RollModifier } from './weapon';
import { Goblin } from './goblin';
import { Die, D8 } from './dice';

const sword = new Weapon('Longsword', D8, RollModifier.STRENGTH);
const playerStats = new Stats(14, 12, 12, 10, 10, 8);
const hero = new Player('Hero', 1, playerStats, 14, 10, sword);
const goblin = new Goblin('Goblin');

console.log(hero.weapon.attack(hero, goblin));
console.log(`Goblin HP: ${goblin.hitPoints}`);
