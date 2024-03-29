import Fighter from "./Fighter.js";

import { create, createIn } from "./dom.js";

export default class Avatar extends Fighter {
  #healthEl;
  #avatarEl;

  constructor(id, character) {
    super(id, character);
    this.#createGUI();
  }

  #createGUI() {
    const wrapperEl = createIn(
      document.querySelector(`.${this.id}.avatar-container`),
      "div",
      "fighter"
    );

    createIn(wrapperEl, "p", "name", this.name);

    const healthWrapperEl = createIn(wrapperEl, "p", "health-wrapper");
    this.#healthEl = createIn(healthWrapperEl, "span", "health", this.health);
    createIn(healthWrapperEl, "span", "", " / " + this.health);

    this.#avatarEl = createIn(wrapperEl, "div", "avatar");

    this.abilitiesWrapperEl = createIn(wrapperEl, "div", "abilities");
    this.abilities.forEach((ability) => {
      const button = createIn(
        this.abilitiesWrapperEl,
        "button",
        "ability",
        ability.name
      );

      button.disabled = true;

      button.addEventListener("click", () => {
        this.updateGUI.message(
          `${this.name} (${this.id}) used ${ability.name}`
        );

        ability.use(this);
      });
    });
  }

  updateGUI = {
    health: (health) => {
      this.#healthEl.textContent = health;
    },
    avatarFlashState: (state) => {
      this.#avatarEl.classList.add(state);
      setTimeout(() => {
        this.#avatarEl.classList.remove(state);
      }, 1000);
    },
    avatarState: (state) => {
      this.#avatarEl.classList.add(state);
    },
    message: (message) => {
      const box = document.querySelector(".message-box")

      box.append(create("p", "message", message));
      box.scrollTop = box.scrollHeight
    },
  };
}


