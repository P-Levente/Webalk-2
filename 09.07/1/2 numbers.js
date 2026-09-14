import input from "./input.js";

let a = +(await input("1 szám "));
let b = +(await input("2 szám "));

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(parseInt(a / b));
console.log(a % b);
