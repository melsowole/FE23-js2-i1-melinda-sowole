import Avatar from "./Avatar.js";

export default class Fighter {
  constructor(name, health, abilities) {
    this.name = name;
    this.baseHealth = health;
    this.health = this.baseHealth;
    this.abilities = abilities;

    this.avatar = new Avatar(this);
  }

  attack(damage, reciever) {
    console.log(this.name, "dealt", damage, "damage");
    this.avatar.attack();
    reciever.takeDamage(damage);
  }

  takeDamage(damage) {
    console.log(this.name, "took", damage, "damage");
    this.avatar.takeDamage(damage);

    this.health = this.health - damage;

    if (this.health == 0) {
      this.die();
    }
  }

  die() {
    console.log(this.name, "died");
  }

  // name
  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== "string" || val.length == 0) {
      throw new Error("Name must be a string");
    }

    this._name = val[0].toUpperCase() + val.slice(1);
  }

  // base health
  get baseHealth() {
    return this._baseHealth;
  }

  set baseHealth(val) {
    if (this._validatePropertyInput(val, "Base Health", "baseHealth")) {
      this._baseHealth = val;
    }
  }

  // current health
  get health() {
    return this._health;
  }

  set health(val) {
    this._health = val < 0 ? 0 : val > this.baseHealth ? this.baseHealth : val;
  }

  // opponent
  get opponent() {
    return this._opponent;
  }

  set opponent(val) {
    if (typeof val !== "object" && val == this) {
      throw new Error("Opponent must be a fighter and cannot be the self");
    }

    this._opponent = val;
  }

  // helpers
  _validatePropertyInput = (val, statName, propertyName) => {
    this._checkIfNumberGreaterThan0(val, statName);
    this._checkIfStatAlreadySet(propertyName);

    return true;
  };

  _checkIfNumberGreaterThan0 = (val, statName) => {
    if (typeof val !== "number" || val < 0) {
      throw new Error(statName + " must be a number greater than 0");
    }
  };

  _checkIfStatAlreadySet = (propertyName) => {
    if (this[`_${propertyName}`]) {
      throw new Error("Base stats cannot be changed");
    }
  };
}
