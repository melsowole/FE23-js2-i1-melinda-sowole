import Avatar from "./Avatar.js";

import OceanicSurge from "./abilities/OceanicSurge.js";
import SoothingWaters from "./abilities/SoothingWaters.js";
import WaveManipulation from "./abilities/WaveManipulation.js";
import MothersWrath from "./abilities/MothersWrath.js";

export default class Yemoja extends Avatar {
  constructor(id) {
    // base stats
    const name = "Yemoja";
    const health = 100;
    const defense = 1;
    const atk = 1;
    const speed = 1;
    const abilities = [
      new OceanicSurge(),
      new SoothingWaters(),
      new WaveManipulation(),
      new MothersWrath(),
    ];

    super(id, name, health, abilities);
  }
}
