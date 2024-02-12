import Ability from "../Ability.js";

export default class SoothingWaters extends Ability {
  #baseHeal;
  constructor() {
    const name = "Soothing Waters";
    const description =
      "Yemoja releases healing waters to restore health to herself.";
    super(name, description);
    this.#baseHeal = 10;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);
    fighter.heal(this.#baseHeal);
  }
}
