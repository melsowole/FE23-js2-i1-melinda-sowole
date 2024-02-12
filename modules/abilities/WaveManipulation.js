import Ability from "../Ability.js";

export default class WaveManipulation extends Ability {
  #baseVariance;
  constructor() {
    const name = "Wave Manipulation";
    const description =
      "Yemoja controls the flow of the battle by altering the attack speed of herself and the opponent.";
    super(name, description);
    this.#baseVariance = 10;
  }

  use(fighter) {
    console.log("change speeds of characters");
  }
}
