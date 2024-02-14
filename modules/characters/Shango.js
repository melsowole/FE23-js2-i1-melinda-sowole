import Avatar from "../Avatar.js";

import ChopChopChop from "../abilities/ChopChopChop.js";
import Justice from "../abilities/Justice.js";
import Intimidate from "../abilities/Intimidate.js";
import Bloodshot from "../abilities/Bloodshot.js";

export default class Shango extends Avatar {
  constructor(id) {
    const SHANGO = {
      name: "Shango",
      health: 100,
      defense: 0.7,
      atk: 100,
      speed: 110,
      abilities: [
        new ChopChopChop(),
        new Justice(),
        new Intimidate(),
        new Bloodshot(),
      ],
    };

    super(id, SHANGO);
  }
}
