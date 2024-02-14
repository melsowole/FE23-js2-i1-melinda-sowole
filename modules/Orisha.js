import Interface from "./Interface.js";
import Yemoja from "./characters/Yemoja.js";
import Shango from "./characters/Shango.js";

export class Orisha extends Interface {
  constructor() {
    const characters = ["Yemoja", "Shango"];
    super(characters);
  }
}

export class CharacterSelection {
  select(characterName, playerName) {
    switch (characterName) {
      case "Yemoja":
        return new Yemoja(playerName);
      case "Shango":
        return new Shango(playerName);
      default:
        break;
    }
  }
}
