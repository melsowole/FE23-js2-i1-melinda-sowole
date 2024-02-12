import Ability from "../Ability.js";

export default class OceanicSurge extends Ability {
  constructor() {
    const name = "Oceanic Surge";
    const description = "Deal water damage.";
    super(name, description);
    this.baseDmg = 50;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);
    fighter.attack(this.baseDmg, fighter.opponent);
  }
}
