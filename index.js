import { Orisha } from "./modules/Orisha.js";
import Shango from "./modules/characters/Shango.js";
import Yemoja from "./modules/characters/Yemoja.js";

const game = new Orisha();

const p1 = new Shango("p1");
const p2 = new Yemoja("p2");

game.players = [p1, p2];

game.start();
