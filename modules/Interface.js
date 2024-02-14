import Game from "./Game.js";
import { CharacterSelection } from "./Orisha.js";
import { create, createIn } from "./dom.js";

export default class Interface extends Game {
  constructor(characters) {
    super(characters);
    this.characterSelection = new CharacterSelection();
    this.initialize();
  }

  initialize() {
    preGameScreen(this);
  }

}

function preGameScreen(game) {
  const container = createIn(document.body, "main", "character-selection");

  const title = createIn(container, "h1", "game-title", "Orisha");

  const h2 = createIn(container, "h2", "screen-title", "Character Select");

  const playerSelectWrapper = createIn(container, "div", "selection-wrapper");

  playerSelectWrapper.append(
    characterSelectDOM(game, "Player 1", "p1"),
    characterSelectDOM(game, "Player 2", "p2")
  );

  const startButton = createIn(
    container,
    "button",
    "start-game-button",
    "start game"
  );

  startButton.addEventListener("click", () => {
    const p1Name = document.getElementById("p1").textContent;
    const p2Name = document.getElementById("p2").textContent;

    document.body.innerHTML = "";

    const p1 = game.characterSelection.select(p1Name, "p1");
    const p2 = game.characterSelection.select(p2Name, "p2");

    game.players = [p1, p2];

    game.start();
  });
}

function characterSelectDOM(game, playerName, playerId) {
  const container = create("div", [playerId, "selection"]);

  const h2 = createIn(container, "h4", "", playerName);

  const characterGrid = createIn(container, "div", "character-grid");

  game.characters.forEach((character, i) => {
    const card = characterCardDOM(character, playerId);

    characterGrid.append(card);

    if (i == 0) {
      card.id = playerId;
    }
  });

  return container;
}

function characterCardDOM(characterName, playerId) {
  const characterCard = create("div", "character-card");

  const name = createIn(characterCard, "p", "name-card", characterName);

  characterCard.addEventListener("click", () => {
    const prevSelectedCard = document.getElementById(playerId);

    if (prevSelectedCard) {
      prevSelectedCard.removeAttribute("id");
    }

    characterCard.id = playerId;
  });

  return characterCard;
}
