let loremIpsum =
  "Adipiscing commodo elit at imperdiet dui accumsan sit amet Nulla";

// * length
console.warn(loremIpsum.length);

// * indexOf
const indexOfCommodo = loremIpsum.indexOf("commodo");
console.log("indexOf", indexOfCommodo);

// * slice
const sliceString = loremIpsum.slice(
  indexOfCommodo,
  "commodo elit".length + indexOfCommodo
);
console.log(sliceString);

// * substring
const substring1 = loremIpsum.substring(
  indexOfCommodo,
  "commodo elit".length + indexOfCommodo
);
const substring2 = loremIpsum.substring(indexOfCommodo);
console.log(substring1);
console.log(substring2);

// * toUpperCase
const upperCase = loremIpsum.toUpperCase();
console.log(upperCase);

// * toLowerCase
const lowerCase = loremIpsum.toLowerCase();
console.log(lowerCase);

// * trim, trimStart, trimEnd
const trimUsage = "      euismod quis viverra nibh cras      ";
console.log(trimUsage.trim());
console.log(trimUsage.trimStart());
console.log(trimUsage.trimEnd());

// * replace
const replaceUsage = "I am using Twitter";
console.log(replaceUsage.replace("Twitter", "X"));

// * split
const splitUsage = replaceUsage.split(" ");
console.log(splitUsage);

// * includes
console.log(loremIpsum.includes("at"));

let stringTemplateLiteral = `${replaceUsage} and Threads`;
stringTemplateLiteral = replaceUsage + " and Threads";
stringTemplateLiteral = replaceUsage.concat(" and ").concat("Threads");
console.log(stringTemplateLiteral);