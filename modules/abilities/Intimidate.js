import Ability from "../Ability.js";

export default class Intimidate extends Ability {

  constructor() {
    const name = "Intimidate";
    const description =
      "Shango speaks in thunderous flame, frightening his foe, causing permanently increasing their speed but lowering their attack.";
    super(name, description);

  }

  use(fighter) {
    super.use(fighter);

    fighter.opponent.modifyStats({
      speed: this.Stats.speedInc,
      atk: this.Stats.atkDec,
    });

  }
}
