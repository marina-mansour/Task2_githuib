console.log("hello github");

function add(a, b) {
  if (typeof a != "number" || typeof b != "number")
    throw "please enter only tow number";
  return a + b;
}
