function elso() {
  for (let i = 1; i < 6; i++) {
    console.log("* ".repeat(i));
  }
}
console.log("Right half pyramid");
elso();
console.log("left half pyramid");
function masodik() {
  for (let i = 1; i < 6; i++) {
    console.log(" ".repeat((5 - i) * 2) + " *".repeat(i));
  }
}
masodik();
console.log("Full pyramid");
function harmadik() {
  for (let i = 1; i < 6; i++) {
    console.log(" ".repeat(5 - i) + " *".repeat(i));
  }
}
harmadik();
console.log("Inverted Right half pyramid");
function negyedik() {
  for (let i = 1; i < 6; i++) {
    console.log(" *".repeat(5 - i));
  }
}

negyedik();
function otodik() {
  for (let i = 1; i < 6; i++) {
    console.log(" ".repeat((4 - (5 - i)) * 2) + " *".repeat(6 - i));
  }
}
console.log("Inverted Left half pyramid");
otodik();
