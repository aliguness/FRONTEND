let sinif = ["Ali", "Aysu", "Aminenur", "Gizem", "Orhun", "Osman", "Salih"];
const numbers = [49, 1, 52, 67, 33, 200, 120];

// * FOREACH
sinif.forEach((value, index, array) => {
  // console.log(value);
  // console.log(index);
  // console.log(array);
});

// * MAP
const yeniSinif = sinif.map((value, index, array) => {
  return `${value} array'in ${index}. elemanıdır.`;
});
// console.log(yeniSinif);

// * FILTER
const filterCB = (value, index, array) => {
  return value.length >= 5;
};
const yeniSinif1 = sinif.filter(filterCB);
// console.log(yeniSinif1);
// const filteredNumbers = numbers.filter((value) => {
//   return value > 50;
// });
const filteredNumbers = numbers.filter((value) => value > 50);
// console.log(filteredNumbers);

// * EVERY
// every method'u tüm elemanlar için condition sağlanıyorsa true döner.
// eğer bir eleman dahi condition'ı sağlamazsa false döner.
const everyNumbers = numbers.every((number) => {
  return number > 2;
});
// console.log(everyNumbers);

// * SOME
// verilen condition'ı en az bir eleman sağlıyorsa true,
// hiçbir eleman sağlamıyorsa false döndürür.
const someNumbers1 = numbers.some((number) => {
  return number > 50;
});
// console.log(someNumbers1);
const someNumbers2 = numbers.some((number) => number > 200);
// console.log(someNumbers2);

// * FIND
const findNumber = numbers.find((number) => number > 50);
// console.log(findNumber);

// * FINDLAST
const findLastNumber = numbers.findLast((number) => {
  return number > 150;
});
// console.log(findLastNumber);

// * FINDINDEX
const findIndexNumber = numbers.findIndex((number) => number > 50);
// console.log(findIndexNumber);

// * FINDLASTINDEX
const findLastIndexNumber = numbers.findLastIndex((number) => {});
// console.log(findLastIndexNumber);

// * SORT
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// sinif.sort().reverse();
// console.log(sinif);

// * REDUCE
const totalNumbers = numbers.reduce((total, number) => {
  return total + number;
});
console.log(totalNumbers);