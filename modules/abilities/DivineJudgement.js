import Ability from "../Ability.js";

export default class DivineJudgement extends Ability {
  #baseDmg;
  constructor() {
    const name = "Double Chop";
    const description =
      "Obatala unleashes a devastating strike, dealing medium damage with righteous fury.";
    super(name, description);
    this.#baseDmg = 0.5;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.attack(this.#baseDmg, fighter.opponent);
  }
}
