import Ability from "../Ability.js";

export default class WaveManipulation extends Ability {
  constructor() {
    const name = "Wave Manipulation";
    const description =
      "Yemoja controls the flow of the battle by altering the attack speed of herself and the opponent.";
    super(name, description);
  }

  use(fighter) {
    super.use(fighter);
    
    const fighters = [ fighter, fighter.opponent];

    fighters.forEach(fighter => {
      fighter.modifyStats({
        speed: generateRandomWithVariance(this.Stats.variance),
      });
      
    });

  }
}

function generateRandomWithVariance(variance){
  const posOrNeg = Math.floor(Math.random() * 10) % 2; 
  return (Math.random() * variance).toFixed(2) * (posOrNeg ? -1 : 1);
}