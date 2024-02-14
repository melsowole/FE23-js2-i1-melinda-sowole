import Stats from "./Stats.js";

export default class Ability {
  #name;
  #description;

  constructor(name, description, basePower) {
    this.name = name;
    this.description = description;

    this.Stats = Stats[capitalizeAndJoin(name)];
  }

  use(fighter) {
    console.log(`${fighter.name} (${fighter.id}) used ${this.name}`);
  }

  // name
  get name() {
    return this.#name;
  }

  set name(val) {
    if (propertyHasBeenSet(this.#name)) return;

    this.#name = val;
  }

  // description
  get description() {
    return this.#description;
  }

  set description(val) {
    if (propertyHasBeenSet(this.#description)) return;

    this.#description = val;
  }
}

function propertyHasBeenSet(property) {
  if (property) {
    throw new Error("Property cannot be changed");
  }
  return false;
}

function capitalizeAndJoin(name) {
  let words = name.split(" ");
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join("");
}