export default class Fighter {
  #baseAtk;
  #baseSpeed;
  #baseDefense;
  #baseHealth;
  #currentHealth;
  #currentSpeed;
  #currentDefense;
  #currentAtk;
  #opponent;
  constructor(id, { name, health, atk, speed, defense, abilities }) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.atk = atk;
    this.speed = speed;
    this.defense = defense;
    this.abilities = abilities;

  }

  attack(damage, reciever) {
    this.updateGUI.message(
      `${this.name} (${this.id}) dealt ${(damage * this.atk).toFixed(0)} damage`
    );

    reciever.takeDamage((damage * this.atk.toFixed(0)));
  }

  takeDamage(damage) {
    this.updateGUI.message(
      `${this.name} (${this.id}) took ${damage.toFixed(0)} damage`
    );

    this.updateGUI.avatarFlashState("take-damage");

    this.health = (this.health - (damage * ( 1 - this.defense ))).toFixed(0);

    if (this.health == 0) {
      this.die();
    }
  }

  modifyStats(stats){
    this.updateGUI.avatarFlashState("modify-stats");

    for (const stat in stats) {
      const oldStat = this[stat];
      this[stat] = this.#getBaseStat(stat) * stats[stat];

      const newStat = this[stat].toFixed(0);

      const statChange = oldStat - newStat ; 
      const increaseOrDecrease = statChange < 0 ? "increased" : "decreased";

      

      this.updateGUI.message(
        `${this.name}'s (${
          this.id
        }) ${stat} was ${increaseOrDecrease} by ${Math.abs(statChange).toFixed(
          0
        )} points`
      );
    }

  }

  heal(healPercent) {
    this.updateGUI.avatarFlashState("heal");
    const heal = this.#baseHealth * (healPercent - 1);
    this.health = (this.health + heal).toFixed(0);

    this.updateGUI.message(
      `${this.name}'s (${this.id}) healed ${heal.toFixed(0)} health points`
    );
    
  }

  die() {
    console.log(this.name, "died");
    this.updateGUI.avatarState("death");
  }

  resetToBaseStats(stats){
    stats.forEach(stat => {
      this[stat] = this.#getBaseStat(stat);
    });
  }

  #getBaseStat(stat){
    switch (stat) {
      case "health":
        return this.#baseHealth;
      case "atk":
        return this.#baseAtk;
      case "speed":
        return this.#baseSpeed;
      case "defense":
        return this.#baseDefense;
      default:
        throw new Error("That base stat does not exist.");
        break;
    }
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

  // current health
  get health() {
    //make sure it is a number
    return this.#currentHealth * 1;
  }

  set health(val) {
    if(!this.#currentHealth){
      this.#baseHealth = val;
    }

    this.#currentHealth =
      val < 0 ? 0 : val > this.#baseHealth ? this.#baseHealth : val;

    if (this.updateGUI) {
      this.updateGUI.health(this.#currentHealth);
    }
  }

  // speed
  get speed() {
    return this.#currentSpeed;
  }

  set speed(val) {
    if (!this.#currentSpeed) {
      this.#baseSpeed = val;
    }
    this.#currentSpeed = val;
  }

  // atk

  get atk() {
    return this.#currentAtk;
  }

  set atk(val) {
    if (!this.#currentAtk) {
      this.#baseAtk = val;
    }
    this.#currentAtk = val;
  }

  // defense
  get defense() {
    
    return this.#currentDefense;
  }

  set defense(val) {
    if (!this.#currentDefense) {
      this.#baseDefense = val;
    }
    this.#currentDefense = val;
  }

  // opponent
  get opponent() {
    return this.#opponent;
  }

  set opponent(val) {
    if (typeof val !== "object" && val == this) {
      throw new Error("Opponent must be a fighter and cannot be the self");
    }

    this.#opponent = val;
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

  #capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }
}
