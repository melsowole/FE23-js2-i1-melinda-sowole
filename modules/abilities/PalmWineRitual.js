import Ability from "../Ability.js";

export default class PalmWineRitual extends Ability {
  constructor() {
    const name = "Palm Wine Ritual";
    const description =
      "Obatala imbibes from his palm wine, sacrificing speed and defense for a straggering boost in attack power.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);

    fighter.modifyStats({
      speed: this.Stats.speedDec,
      defense: this.Stats.defenseDec,
      atk: this.Stats.atkInc,
    });
  }
}
