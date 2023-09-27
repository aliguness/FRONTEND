const isUser = true;

const isLoggedIn = isUser ? "logged in" : "signed out";
console.log(isLoggedIn);

const a = 3 + 5;
const b = 7;
const c = "8";

if (a == c) {
  if (b == c) {
    console.log("a, b ve c değerleri birbirine eşittir.");
  } else {
    console.log("a ve c değerleri birbirine eşittir.");
  }
} else if (a === b) {
  console.log("a ve b değerleri birbirine eşittir.");
} else {
  console.log("a ve b değerleri eşit değillerdir.");
}

const sentence =
  a == c
    ? b == c
      ? "a, b ve c değerleri birbirine eşittir."
      : "a ve c değerleri birbirine eşittir."
    : a === b
    ? "a ve b değerleri birbirine eşittir."
    : "a ve b değerleri eşit değillerdir.";

console.log(sentence);