import Fighter from "./modules/Fighter.js";
import Yemoja from "./modules/Yemoja.js";

const p1 = new Yemoja("p1");
const p2 = new Yemoja("p2");

// p1.perform(0, p1, p2);

p1.opponent = p2;
p2.opponent = p1;

