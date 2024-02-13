import Avatar from "../Avatar.js";

import DoubleChop from "../abilities/DoubleChop.js";
import Justice from "../abilities/Justice.js";
import Intimidate from "../abilities/Intimidate.js";
import Bloodshot from "../abilities/Bloodshot.js";

export default class Shango extends Avatar {
  constructor(id) {
    const SHANGO = {
      name: "Shango",
      health: 100,
      defense: 1.1,
      atk: 1,
      speed: 1.1,
      abilities: [
        new DoubleChop(),
        new Justice(),
        new Intimidate(),
        new Bloodshot(),
      ],
    };

    super(id, SHANGO);
  }
}
