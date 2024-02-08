import { create, createIn } from "./dom.js";

export default class Avatar {
  #wrapperEl;
  #nameEl;
  #healthWrapperEl;
  #healthEl;
  #avatarEl;

  constructor(name, health) {
    console.log("hello");
    this.#createGUI(name, health);
  }

  takeDamage(health) {
    this.#setHealth(health);
    this.#setAvatarState("take-damage");
  }

  attack() {
    this.#setAvatarState("attack");
  }

  heal() {
    this.#setAvatarState("heal");
  }

  changeStats() {
    this.#setAvatarState("change-stats");
  }

  #createGUI(name, health) {
    this.#wrapperEl = createIn(document.body, "div", "fighter");

    this.#nameEl = createIn(this.#wrapperEl, "p", "name", name);

    this.#healthWrapperEl = createIn(this.#wrapperEl, "p", "health-wrapper");
    this.#healthEl = createIn(this.#healthWrapperEl, "span", "health", health);
    createIn(this.#healthWrapperEl, "span", "", " / " + health);

    this.#avatarEl = createIn(this.#wrapperEl, "div", "avatar");
  }

  #setHealth(health) {
    this.#healthEl.textContent = health;
  }

  #setAvatarState(state) {
    this.#avatarEl.classList.add(state);
    setTimeout(() => {
      this.#avatarEl.classList.remove(state);
    }, 1000);
  }
}
