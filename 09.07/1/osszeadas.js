import input from "./input.js";

let sz1 = await input("Adjon meg egy számot: ");
let sz2 = await input("Adjon meg egy számot: ");

console.log(parseFloat(sz1) + parseFloat(sz2));
