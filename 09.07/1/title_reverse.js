import input from "./input.js";

let szo = await input("Kérek egy szót");
function reverse(w) {
  let betu = w.split("");
  betu[0] = betu[0].toUpperCase();
  return betu.reverse().join("");
}
console.log(reverse(szo.toString()));
