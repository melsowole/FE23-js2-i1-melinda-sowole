import Ability from "../Ability.js";

export default class ChopChopChop extends Ability {
  constructor() {
    const name = "Chop Chop Chop";
    const description =
      "Shango strikes his foe with his axe between 1 and 3 times.";
    super(name, description);
  }

  use(fighter) {
   super.use(fighter);

   const amountOfHits = Math.random() * 3 + 1;

    fighter.attack(this.Stats.dmg * amountOfHits, fighter.opponent);
  }
}
