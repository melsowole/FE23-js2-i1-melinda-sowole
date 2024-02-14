import Avatar from "../Avatar.js";

import OceanicSurge from "../abilities/OceanicSurge.js";
import SoothingWaters from "../abilities/SoothingWaters.js";
import WaveManipulation from "../abilities/WaveManipulation.js";
import MothersWrath from "../abilities/MothersWrath.js";

export default class Yemoja extends Avatar {
  constructor(id) {
    const YEMOJA = {
      name: "Yemoja",
      health: 100,
      defense: 0,
      atk: 100,
      speed: 100,
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
