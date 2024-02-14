import Game from "./Game.js";
import { CharacterSelection } from "./Orisha.js";
import { create, createIn } from "./dom.js";

export default class Interface extends Game {
  constructor(characters) {
    super(characters);
    // this.initialize();
    this.characterSelection = new CharacterSelection();
  }

  initialize() {
    this.createPreGameScreen();
  }

  createPreGameScreen() {
    const container = createIn(document.body, "main", "choose-character");

    const h1 = createIn(container, "h1", "", "Select your characters!");

    const p1Select = this.characterSelect("Player 1", "p1");
    const p2Select = this.characterSelect("Player 2", "p2");

    container.append(p1Select, p2Select);

    const startButton = createIn(container, "button", "", "start game");

    startButton.addEventListener("click", () => {
      const p1Name = document.getElementById("p1").textContent;
      const p2Name = document.getElementById("p2").textContent;

      document.body.innerHTML = "";

      const p1 = this.characterSelection.select(p1Name, "p1");
      const p2 = this.characterSelection.select(p2Name, "p2");

      this.players = [p1, p2];

      this.start();
    });
  }

  characterSelect(playerName, playerId) {
    const container = create("div");

    const h2 = createIn(container, "h2", "", playerName);

    const characterGrid = createIn(container, "div");

    this.characters.forEach((character, i) => {
      const card = this.characterCard(character, playerId);

      characterGrid.append(card);

      if (i == 0) {
        card.id = playerId;
      }
    });

    return container;
  }

  characterCard(characterName, playerId) {
    const characterCard = create("div", "character-card");

    const name = createIn(characterCard, "h3", "", characterName);

    characterCard.addEventListener("click", () => {
      const prevSelectedCard = document.getElementById(playerId);

      if (prevSelectedCard) {
        prevSelectedCard.removeAttribute("id");
      }

      characterCard.id = playerId;
    });

    return characterCard;
  }
}
