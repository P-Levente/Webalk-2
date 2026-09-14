function elso() {
  console.log("Hollow ful pyramid");
  for (let i = 1; i < 6; i++) {
    console.log(" ".repeat(5 - i) + " *" + (i == 5 ? " *" :" ".repeat(Math.max(i*2-3,0)) + (i > 1 ? "*" : " ")).repeat(i),);
  }
}
elso();
+