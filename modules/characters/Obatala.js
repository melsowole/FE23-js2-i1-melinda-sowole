import Avatar from "../Avatar.js";

import DivineJudgement from "../abilities/DivineJudgement.js";
import PalmWineRitual from "../abilities/PalmWineRitual.js";
import PurifyTheSpirit from "../abilities/PurifyTheSpirit.js";
import ArtisansTouch from "../abilities/ArtisansTouch.js";

export default class Obatala extends Avatar {
  constructor(id) {
    const OBATALA = {
      name: "Obatala",
      health: 100,
      defense: 100,
      atk: 100,
      speed: 100,
      abilities: [
        new DivineJudgement(),
        new PalmWineRitual(),
        new PurifyTheSpirit(),
        new ArtisansTouch(),
      ],
    };

    super(id, OBATALA);
  }
}
