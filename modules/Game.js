import Yemoja from "./Yemoja.js";
import { create, createIn } from "./dom.js";

export default class Game {
  #players;
  #round;
  #characters;
  constructor() {
    this.#round = 0;

    this.#characters = ["Yemoja", "Yemoja", "Yemoja"];
  }

  preGame() {
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

      const p1 = this.selectCharacter(p1Name, "p1");
      const p2 = this.selectCharacter(p2Name, "p2");

      this.players = [p1, p2];

      this.start();
    });
  }

  characterSelect(playerName, playerId) {
    const container = create("div");

    const h2 = createIn(container, "h2", "", playerName);

    const characterGrid = createIn(container, "div");

    this.#characters.forEach((character, i) => {
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

  selectCharacter(characterName, playerName) {
    switch (characterName) {
      case "Yemoja":
        return new Yemoja(playerName);
      default:
        break;
    }
  }

  ///

  get players() {
    return this.#players;
  }

  set players(val) {
    if (!(val instanceof Array) || val.length !== 2) {
      throw new Error("Players must be an array of two fighters");
    } else {
      this.#players = val;
    }

    this.#setOpponents();
  }

  async start() {
    while (this.players[0].health > 0 && this.players[1].health > 0) {
      console.log(this.players[0].health, this.players[1].health);
      await this.#newRound();
    }

    alert(this.#getWinner().id + " won!");
  }

  async #newRound() {
    let playerTurnOrder = this.#getPlayerTurnOrder();

    // first player turn
    const firstPlay = await new Promise((resolve, reject) => {
      this.#turnOfAPlayer(playerTurnOrder[0], resolve, reject);
    });

    console.log(firstPlay);

    if (firstPlay) {
      const secondPlay = await new Promise((resolve) => {
        this.#turnOfAPlayer(playerTurnOrder[1], resolve);
      });
    }
  }

  async #turnOfAPlayer(player, resolve, reject) {
    this.#enableButtons(player.abilitiesWrapperEl);

    const turnChoice = document.body.addEventListener("click", (e) => {
      if (e.target.className == "ability") {
        this.#disableButtons(player.abilitiesWrapperEl);
        document.body.removeEventListener("click", turnChoice);

        // turn logic
        if (player.opponent.health == 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      }
    });
  }

  #enableButtons(wrapper) {
    this.#changeButtonState(wrapper, "enable");
  }

  #disableButtons(wrapper) {
    this.#changeButtonState(wrapper, "disable");
  }

  #changeButtonState(wrapper, state) {
    const buttons = wrapper.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = state == "enable" ? false : true;
    });
  }

  #setOpponents() {
    this.players.forEach((player) => {
      player.opponent = this.#getOtherPlayer(player);
    });
  }

  #getOtherPlayer(player) {
    for (const playerObj of this.players) {
      if (player !== playerObj) {
        return playerObj;
      }
    }
  }

  #getPlayerTurnOrder() {
    return this.players.sort((x, y) => x.speed > y.speed);
  }

  #getWinner() {
    for (const player of this.players) {
      if (player.health == 0) {
        return this.#getOtherPlayer(player);
      }
    }
  }
}
