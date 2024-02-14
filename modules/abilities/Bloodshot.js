import Ability from "../Ability.js";

export default class Bloodshot extends Ability {
  constructor() {
    const name = "Bloodshot";
    const description =
      "Shango's eyes burn red with rage, slowing his speed but increasing his damage.";
    super(name, description);
  }

  use(fighter) {
   super.use(fighter);

  fighter.modifyStats({ 
    speed: this.Stats.speedDec, 
    atk: this.Stats.atkInc 
  });

  }
}
