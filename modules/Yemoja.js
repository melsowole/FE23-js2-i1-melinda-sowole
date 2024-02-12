import Fighter from "./Fighter.js";
import OceanicSurge from "./abilities/OceanicSurge.js";

export default class Yemoja extends Fighter {
  constructor() {
    // base stats
    const name = "Yemoja";
    const health = 100;
    const defense = 1;
    const atk = 1;
    const speed = 1;
    const abilities = [new OceanicSurge()];

    super(name, health, abilities);
  }
}
