// yanlış kullanım
["Serkan", "Zorlu", 1991];

const serkan = {
  name: "Serkan",
  surname: "Zorlu",
  date: 1991,
};

let sinif = [
  "Ali",
  "Aysu",
  "Aminenur",
  "Gizem",
  "Orhun",
  "Osman",
  "Salih",
  "Yiğitcan",
];
console.log(sinif[2]);
// * indexOf
sinif[sinif.indexOf("Osman")] = "Onur";
console.log(sinif);

// * push
sinif.push(serkan.name);
console.log(sinif);

// * pop
sinif.pop();
console.log(sinif);

// * slice
const sinif1 = sinif.slice(3, 6);
console.log(sinif1);

// * splice
sinif.splice(3, 2, "Afife", "Betul");
console.log(sinif);

// * includes
console.log(sinif.includes("Salih"));

// * shift
sinif.shift();
console.log(sinif);

// * unshift
sinif.unshift("Burak", "Mehmet", "Caner");
console.log(sinif);

// * reverse
sinif.reverse();
console.log(sinif);

// * concat
const konusanlar = ["Alperen", "Ünal"];
const sinif2 = sinif.concat(konusanlar).concat("Ali");
console.log(sinif2);

// * join
const sentence = `Sınıfımda ${sinif.join(", ")} kişileri var.`;
console.log(sentence);