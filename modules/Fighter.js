export default class Fighter {
  constructor(id, { name, health, atk, speed, defense, abilities }) {
    this.id = id;
    this.name = name;
    this.baseHealth = health;
    this.health = this.baseHealth;
    this.atk = atk;
    this.speed = speed;
    this.defense = defense;
    this.abilities = abilities;
  }

  attack(damage, reciever) {
    // add dmg boost
    this.updateGUI.avatarFlashState("attack");
    reciever.takeDamage(damage * this.atk);
  }

  takeDamage(damage) {
    // add dmg negation
    console.log(this.name, "took", damage, "damage");
    this.updateGUI.avatarFlashState("take-damage");

    this.health = this.health - damage * this.defense;

    if (this.health == 0) {
      this.die();
    }
  }

  heal(heal) {
    this.updateGUI.avatarFlashState("heal");
    this.health = this.health + heal;
  }

  die() {
    console.log(this.name, "died");
    this.updateGUI.avatarState("death");
  }

  //id

  get id() {
    return this._id;
  }

  set id(val) {
    return (this._id = val);
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

    if (this.updateGUI) {
      this.updateGUI.health(this._health);
    }
  }

  // speed
  get speed() {
    return this._speed;
  }

  set speed(val) {
    this._speed = val;
  }

  // atk

  get atk() {
    return this._atk;
  }

  set atk(val) {
    this._atk = val;
  }

  // defense
  get defense() {
    return this._defense;
  }

  set defense(val) {
    this._defense = val;
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
