import Fighter from "./Fighter.js";

import { create, createIn } from "./dom.js";

export default class Avatar extends Fighter {
  #healthEl;
  #avatarEl;

  constructor(id, name, health, abilities) {
    super(id, name, health, abilities);
    this.#createGUI();
  }

  // takeDamage(health) {
  //   this.#setHealth(health);
  //   this.#setAvatarState("take-damage");
  // }

  // attack() {
  //   this.#setAvatarState("attack");
  // }

  // heal() {
  //   this.#setAvatarState("heal");
  // }

  // changeStats() {
  //   this.#setAvatarState("change-stats");
  // }

  #createGUI() {
    const wrapperEl = createIn(document.body, "div", "fighter");

    createIn(wrapperEl, "p", "name", this.name);

    const healthWrapperEl = createIn(wrapperEl, "p", "health-wrapper");
    this.#healthEl = createIn(healthWrapperEl, "span", "health", this.health);
    createIn(healthWrapperEl, "span", "", " / " + this.health);

    this.#avatarEl = createIn(wrapperEl, "div", "avatar");

    const abilitiesWrapperEl = createIn(wrapperEl, "div", "abilities");
    this.abilities.forEach((ability) => {
      const button = createIn(
        abilitiesWrapperEl,
        "button",
        "ability",
        ability.name
      );

      button.addEventListener("click", () => {
        ability.use(this);
      });
    });
  }

  // #setHealth(health) {
  //   this.#healthEl.textContent = health;
  // }

  // #setAvatarState(state) {
  //   this.#avatarEl.classList.add(state);
  //   setTimeout(() => {
  //     this.#avatarEl.classList.remove(state);
  //   }, 1000);
  // }
}
