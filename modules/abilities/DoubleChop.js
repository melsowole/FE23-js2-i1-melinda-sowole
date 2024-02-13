import Ability from "../Ability.js";

export default class DoubleChop extends Ability {
  #baseDmg;
  constructor() {
    const name = "Double Chop";
    const description =
      "Shango strikes his foe once with each side of his axe.";
    super(name, description);
    this.#baseDmg = 50;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.attack(this.#baseDmg, fighter.opponent);
  }
}
