import input from "./input.js";

let a = +(await input("Kérem az egyik oldal méretét:"));
let b = +(await input("Kérem az másik oldal méretét:"));
let c = +(await input("Kérem az harmadik oldal méretét:"));

function surface(a, b, c) {
  return "Surface area: " + 2 * (a * b + b * c + c * a);
}
function volume(a, b, c) {
  return "Volume: " + a * b * c;
}
console.log(surface(a, b, c));
console.log(volume(a, b, c));
