import Ability from "../Ability.js";

export default class OceanicSurge extends Ability {
  constructor() {
    const name = "Oceanic Surge";
    const description =
      "Yemoja summons a powerful tidal wave that crashes into her opponent.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);

    fighter.attack(this.Stats.dmg, fighter.opponent);
  }
}
