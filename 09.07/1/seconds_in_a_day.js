import input from "./input.js";

let day = 86400;
let hour = +(await input("Óra: "));
let min = +(await input("Perc: "));
let sec = +(await input("Másodperc: "));

console.log(day - (hour * 3600 + min * 60 + sec) + "másodperc maradt hátra");
