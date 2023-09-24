const a = 3 + 4;
const b = 7;
const c = "7";

// nested if yapısı
if (a == c) {
  if (b == c) {
    console.log("a, b ve c değerleri birbirine eşittir.");
  } else {
    console.log("a ve c değerleri birbirine eşittir.");
  }
} else if (a === b) {
  console.log("a ve değerleri birbirine eşittir.");
} else {
  console.log("a ve b değerleri eşit değillerdir.");
}

if (a == c && b == c) {
  console.log("a, b ve c değerleri birbirine eşittir.");
} else if (a == c) {
  console.log("a ve c değerleri birbirine eşittir.");
} else if (a === b) {
  console.log("a ve değerleri birbirine eşittir.");
} else {
  console.log("a ve b değerleri eşit değillerdir.");
}