import Ability from "../Ability.js";

export default class DivineSacrifice extends Ability {
  constructor() {
    const name = "Divine Sacrifice";
    const description =
      "Obatala offers himself as a conduit for divine energy, inflict damage upon himself to deal the same damage to his foe.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);

    fighter.attack(this.Stats.dmg, fighter.opponent);
    fighter.attack(this.Stats.dmg, fighter);

  }
}
