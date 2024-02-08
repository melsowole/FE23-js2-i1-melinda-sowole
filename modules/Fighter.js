export default class Fighter {
  constructor(name, health) {
    this.name = name;
    this.baseHealth = health;
    this.health = this.baseHealth;
  }

  attack(reciever) {
    console.log(this.name, "dealt", 50, "damage");
    reciever.takeDamage(50);
  }

  takeDamage(damage) {
    console.log(this.name, "took", 50, "damage");

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
