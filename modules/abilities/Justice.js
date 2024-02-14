import Ability from "../Ability.js";

export default class Justice extends Ability {
  constructor() {
    const name = "Justice";
    const description =
      "Shango weighs the scales of justice. The ability has 50% chance to do high damage and 40% chance of missing.";
    super(name, description);
  }

  use(fighter) {
   super.use(fighter);

   const coinToss = Math.random();

   console.log(coinToss)

    if (coinToss <= this.Stats.winChance) {
      fighter.attack(this.Stats.dmgHigh, fighter.opponent);
    } else {
      fighter.attack(this.Stats.dmgLow, fighter.opponent);
    }
  }
}
