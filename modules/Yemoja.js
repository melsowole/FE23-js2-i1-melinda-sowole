import Avatar from "./Avatar.js";

import OceanicSurge from "./abilities/OceanicSurge.js";

export default class Yemoja extends Avatar {
  constructor(id) {
    // base stats
    const name = "Yemoja";
    const health = 100;
    const defense = 1;
    const atk = 1;
    const speed = 1;
    const abilities = [new OceanicSurge(), new OceanicSurge()];

    super(id, name, health, abilities);
  }
}
