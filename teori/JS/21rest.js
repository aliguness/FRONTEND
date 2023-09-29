const numbers = [34, 52, 10, 1, 20];
console.log(sum(...numbers, 56, 34));

/**
 * Parametre olarak verilen sayıları toplayan fonksiyondur.
 * @param  {...number} numbers bu bir rest parametresidir.
 * @returns
 */
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number);
}