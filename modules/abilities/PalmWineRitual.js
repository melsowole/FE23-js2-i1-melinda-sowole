import Ability from "../Ability.js";

export default class PalmWineRitual extends Ability {
  #increase;
  #decrease;
  constructor() {
    const name = "Palm Wine Ritual";
    const description =
      "Obatala imbibes from his palm wine, sacrificing speed and defense for a straggering boost in attack power.";
    super(name, description);
    this.#increase = 1.5;
    this.#decrease = 0.8;
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);

    fighter.changeStat();

    fighter.speed = fighter.speed * this.#decrease; 
    fighter.defense = fighter.defense * this.#decrease; 

    fighter.atk = fighter.atk * this.#increase; 
  }
}
