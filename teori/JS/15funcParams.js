/**
 * Verilen array'deki değerleri teker teker console'a yazdırır.
 * @param {string[]} names bir array'dir.
 * @param {...string} otherNames rest parametresi
 */
function getNames(names = [], ...otherNames) {
  if (names?.length > 0) {
    for (const name of [...names, ...otherNames]) {
      console.log(name);
    }
  } else {
    console.log("Array boş geldi.");
  }
}

const sinif = [
  "Ali",
  "Aysu",
  "Aminenur",
  "Gizem",
  "Orhun",
  "Osman",
  "Salih",
  "Yiğitcan",
];

getNames(sinif, "Ahmet", "Mehmet", "Serkan");
