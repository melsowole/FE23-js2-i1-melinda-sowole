import Yemoja from "./modules/characters/Yemoja.js";
import Shango from "./modules/characters/Shango.js";
import Game from "./modules/Game.js";

const game = new Game();

// set players
game.players = [new Yemoja("p1"), new Shango("p2")];

game.start();
