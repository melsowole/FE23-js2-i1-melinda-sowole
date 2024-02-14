import Ability from "../Ability.js";

export default class PurifyTheSpirit extends Ability {
  constructor() {
    const name = "Purify the Spirit";
    const description =
      "Cleanses himself of vice and intoxication, receiving a minor healing and shedding all detrimental effects.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);
    
    fighter.resetToBaseStats(["speed", "defense", "atk"]);

    fighter.heal(this.Stats.heal);
  }
}
