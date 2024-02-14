import Ability from "../Ability.js";

export default class SoothingWaters extends Ability {

  constructor() {
    const name = "Soothing Waters";
    const description =
      "Yemoja releases healing waters to restore health to herself.";
    super(name, description);

  }

  use(fighter) {
    super.use(fighter);
    
    fighter.heal(this.Stats.heal);
  }
}
