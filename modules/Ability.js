export default class Ability {
  #name;
  #description;

  constructor(name, description, basePower) {
    this.name = name;
    this.description = description;
  }

  use() {
    console.log("used", this.name, "(from Ability.js)");
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
