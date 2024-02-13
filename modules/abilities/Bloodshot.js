import Ability from "../Ability.js";

export default class Bloodshot extends Ability {
  #speedChange;
  #attackChange;
  constructor() {
    const name = "Bloodshot";
    const description =
      "Shango's eyes burn red with rage, slowing his speed but increasing his damage.";
    super(name, description);
    this.#speedChange = 0.2;
    this.#attackChange = 0.1;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.changeStats({});

    fighter.speed = fighter.speed - this.#speedChange;
    fighter.atk = fighter.attack + this.#attackChange;
  }
}
