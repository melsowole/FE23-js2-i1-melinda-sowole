import Ability from "../Ability.js";

export default class Intimidate extends Ability {
  #speedChange;
  #atkChange;
  constructor() {
    const name = "Intimidate";
    const description =
      "Shango speaks in thunderous flame, frightening his foe, causing permanently increasing their speed but lowering their attack.";
    super(name, description);
    this.#speedChange = 1.2;
    this.#atkChange = 0.8;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.opponent.modifyStats({
      speed: this.#speedChange,
      atk: this.#atkChange,
    });

  }
}
