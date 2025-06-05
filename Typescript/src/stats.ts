export class Stats {
  constructor(
    public strength: number,
    public dexterity: number,
    public constitution: number,
    public intelligence: number,
    public wisdom: number,
    public charisma: number
  ) {}

  private modifier(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  get strengthMod(): number {
    return this.modifier(this.strength);
  }

  get dexterityMod(): number {
    return this.modifier(this.dexterity);
  }
}
