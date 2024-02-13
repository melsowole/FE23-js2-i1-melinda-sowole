import Interface from "./Interface.js";
import Yemoja from "./characters/Yemoja.js";

export class Orisha extends Interface {
  constructor() {
    const characters = ["Yemoja", "Yemoja"];
    super(characters);
  }
}

export class CharacterSelection {
  select(characterName, playerName) {
    switch (characterName) {
      case "Yemoja":
        return new Yemoja(playerName);
      default:
        break;
    }
  }
}
