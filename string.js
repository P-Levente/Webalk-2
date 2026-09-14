let txt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis";

function f1() {
  console.log(txt.slice(0, 5));
}

function f2() {
  console.log(txt.slice(2, 8));
}

function f3() {
  console.log(txt.slice(4));
}

function f4() {
  console.log(txt.substr(4, 6));
}

function f5() {
  console.log(txt.toUpperCase());
}

function f6() {
  let feldarab = txt.split("");
  let newtxt = "";
  for (let i = 1; i < txt.length; i++) {
    if (i % 2 == 0) {
      feldarab[i] = feldarab[i].toUpperCase();
    }
    newtxt += feldarab[i];
  }
  console.log(newtxt);
}

function f7() {
  let feldarab = txt.split("");
  let newtxt = "";
  for (let i = 1; i < txt.length; i++) {
    if (feldarab[i] == "e") {
      feldarab[i] = feldarab[i].toUpperCase();
    }
    newtxt += feldarab[i];
  }

  console.log(newtxt);
}

function f8() {
  feldarab = txt.split("e");
  console.log(feldarab);
}
f1();
f2();
f3();
f4();
f5();
f6();
f7();
f8();
