import Ability from "../Ability.js";

export default class MothersWrath extends Ability {
  constructor() {
    const name = "Mother's Wrath";
    const description =
      "Yemoja channels her maternal rage into a devastating attack, with a high miss-rate.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);
    
    if (Math.random() < this.Stats.missRate) {
      console.log(`... but it missed`);
    } else {
      fighter.attack(this.Stats.dmg, fighter.opponent);
    }
  }
}
