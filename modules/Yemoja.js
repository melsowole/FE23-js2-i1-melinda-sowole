import Avatar from "./Avatar.js";

import OceanicSurge from "./abilities/OceanicSurge.js";
import SoothingWaters from "./abilities/SoothingWaters.js";
import WaveManipulation from "./abilities/WaveManipulation.js";
import MothersWrath from "./abilities/MothersWrath.js";

export default class Yemoja extends Avatar {
  constructor(id) {
    const YEMOJA = {
      name: "Yemoja",
      health: 100,
      defense: 1,
      atk: 1,
      speed: 1,
      abilities: [
        new OceanicSurge(),
        new SoothingWaters(),
        new WaveManipulation(),
        new MothersWrath(),
      ],
    };

    super(id, YEMOJA);
  }
}
