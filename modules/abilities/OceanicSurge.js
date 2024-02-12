import Ability from "../Ability.js";

export default class OceanicSurge extends Ability {
  #baseDmg;
  constructor() {
    const name = "Oceanic Surge";
    const description =
      "Yemoja summons a powerful tidal wave that crashes into her opponent.";
    super(name, description);
    this.#baseDmg = 65;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);
    fighter.attack(this.#baseDmg, fighter.opponent);
  }
}
