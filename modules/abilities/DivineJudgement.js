import Ability from "../Ability.js";

export default class DivineJudgement extends Ability {
  constructor() {
    const name = "Divine Judgement";
    const description =
      "Obatala unleashes a devastating strike, dealing medium damage with righteous fury.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);

    fighter.attack(this.Stats.dmg, fighter.opponent);
  }
}
