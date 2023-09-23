var variable = "var";
let letVariable = "let";
const CONST_VARIABLE = "const";

varLetDifference();

function varLetDifference() {
  console.log("a (variable yaratılmadan önce):", a);
  // console.log("b (variable yaratılmadan önce):", b);
  // console.log("c (variable yaratılmadan önce):", c);

  if (true) {
    // global variable
    var a = "a";
    // local variable
    let b = "b";
    const c = "c";

    console.log("a (scope içinde):", a);
    console.log("b (scope içinde):", b);
    console.log("c (scope içinde):", c);
  }

  console.log("a (scope dışında):", a);
  console.log("b (scope dışında):", b);
  // console.log("c (scope dışında):", c);
}