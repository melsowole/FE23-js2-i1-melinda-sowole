import { create, createIn } from "./dom.js";

export default class Avatar {
  #healthEl;
  #avatarEl;

  constructor(cls) {
    console.log("hello");
    this.#createGUI(cls);
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

  #createGUI(cls) {
    const wrapperEl = createIn(document.body, "div", "fighter");

    createIn(wrapperEl, "p", "name", cls.name);

    const healthWrapperEl = createIn(wrapperEl, "p", "health-wrapper");
    this.#healthEl = createIn(healthWrapperEl, "span", "health", cls.health);
    createIn(healthWrapperEl, "span", "", " / " + cls.health);

    this.#avatarEl = createIn(wrapperEl, "div", "avatar");

    const abilitiesWrapperEl = createIn(wrapperEl, "div", "abilities");
    cls.abilities.forEach((ability) => {
      const button = createIn(
        abilitiesWrapperEl,
        "button",
        "ability",
        ability.name
      );

      button.addEventListener("click", () => {
        ability.use();
      });
    });
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
