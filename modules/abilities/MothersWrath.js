import Ability from "../Ability.js";

export default class MothersWrath extends Ability {
  #missRate;
  #baseDmg;
  constructor() {
    const name = "Mother's Wrath";
    const description =
      "Yemoja channels her maternal rage into a devastating attack, with a high miss-rate.";
    super(name, description);
    this.#missRate = 0.8;
    this.#baseDmg = 50;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);
    if (Math.random() < this.#missRate) {
      console.log(`but it missed`);
    } else {
      fighter.attack(this.#baseDmg, fighter.opponent);
    }
  }
}
