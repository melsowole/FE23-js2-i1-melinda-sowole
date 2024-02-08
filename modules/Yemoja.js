import Fighter from "./Fighter.js";
import Avatar from "./Avatar.js";

export default class Yemoja extends Fighter {
  constructor() {
    // base stats
    const name = "Yemoja";
    const health = 100;
    const defense = 1;
    const atk = 1;
    const speed = 1;

    super(name, health);

    this.avatar = new Avatar(this.name, this.health);
  }

}
