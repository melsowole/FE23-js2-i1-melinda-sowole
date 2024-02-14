import Ability from "../Ability.js";

export default class DoubleChop extends Ability {
  constructor() {
    const name = "Double Chop";
    const description =
      "Shango strikes his foe once with each side of his axe.";
    super(name, description);
  }

  use(fighter) {
   super.use(fighter);

    fighter.attack(this.Stats.dmg, fighter.opponent);
  }
}
