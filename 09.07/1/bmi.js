import input from "./input.js";

let s = +(await input("súly: "));
let m = +(await input("magasság: "));

console.log(s / (m * m));
