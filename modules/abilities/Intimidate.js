import Ability from "../Ability.js";

export default class Intimidate extends Ability {
  #speedChange;
  #attackChange;
  constructor() {
    const name = "Intimidate";
    const description =
      "Shango speaks in thunderous flame, frightening his foe, causing premanently increasing thier speed but lowering their attack.";
    super(name, description);
    this.#speedChange = 0.2;
    this.#attackChange = 0.1;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.opponent.changeStats({});

    fighter.opponent.speed = fighter.opponent.speed + this.#speedChange;
    fighter.opponent.atk = fighter.opponent.attack - this.#attackChange;
  }
}
