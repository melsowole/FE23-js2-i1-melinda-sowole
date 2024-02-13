import Ability from "../Ability.js";

export default class Justice extends Ability {
  #baseDmg;
  constructor() {
    const name = "Justice";
    const description =
      "Shango weighs the scales of jsitce. The ability has 50% chance to do high damage and 50% chance of missing.";
    super(name, description);
    this.#baseDmg = 50;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    if (Math.random() <= 0.5) {
      fighter.attack(this.#baseDmg, fighter.opponent);
    } else {
      fighter.attack(this.#baseDmg * 0.5, fighter.opponent);
    }
  }
}
