import Ability from "../Ability.js";

export default class Justice extends Ability {
  constructor() {
    const name = "Justice";
    const description =
      "Shango weighs the scales of justice. The ability has 50% chance to do high damage and 50% chance of missing.";
    super(name, description);
  }

  use(fighter) {
   super.use(fighter);

    if (Math.random() <= 0.5) {
      fighter.attack(this.Stats.dmgHigh, fighter.opponent);
    } else {
      fighter.attack(this.Stats.dmgLow, fighter.opponent);
    }
  }
}
