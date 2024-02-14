import Avatar from "../Avatar.js";

import DivineJudgement from "../abilities/DivineJudgement.js";
import PalmWineRitual from "../abilities/PalmWineRitual.js";
import PurifyTheSpirit from "../abilities/PurifyTheSpirit.js";
import DivineSacrifice from "../abilities/DivineSacrifice.js";

export default class Obatala extends Avatar {
  constructor(id) {
    const OBATALA = {
      name: "Obatala",
      health: 100,
      defense: 0,
      atk: 100,
      speed: 90,
      abilities: [
        new DivineJudgement(),
        new PalmWineRitual(),
        new PurifyTheSpirit(),
        new DivineSacrifice(),
      ],
    };

    super(id, OBATALA);
  }
}
