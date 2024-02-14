import Interface from "./Interface.js";
import Yemoja from "./characters/Yemoja.js";
import Shango from "./characters/Shango.js";
import Obatala from "./characters/Obatala.js";

export class Orisha extends Interface {
  constructor() {
    const characters = ["Yemoja", "Shango", "Obatala"];
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
      case "Obatala":
        return new Obatala(playerName);
      default:
        break;
    }
  }
}
