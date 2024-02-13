export default class Game {
  #players;
  #characters;
  constructor(characters) {
    this.characters = characters;
  }

  // players

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

  /// characters

  get characters() {
    return this.#characters;
  }

  set characters(val) {
    if (!(val instanceof Array) || val.length <= 0) {
      throw new Error(
        "Characters must be an array of several class characters"
      );
    } else {
      this.#characters = val;
    }
  }

  ///

  async start() {
    while (this.players[0].health > 0 && this.players[1].health > 0) {
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
    return this.players.sort((x, y) => x.speed < y.speed);
  }

  #getWinner() {
    for (const player of this.players) {
      if (player.health == 0) {
        return this.#getOtherPlayer(player);
      }
    }
  }
}