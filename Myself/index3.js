// const car = prompt("Lütfen aradığınız araba modelini giriniz.")
//   .trim()
//   .toUpperCase();
// const renk = prompt("Lütfen aradığınız araba rengini giriniz.");

// switch (car) {
//   case "BMW":
//     switch (renk) {
//       case "siyah":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       case "beyaz":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       default:
//         console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//         break;
//     }
//     break;
//   case "Mercedes":
//     switch (renk) {
//       case "beyaz":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       case "siyah":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       default:
//         console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//         break;
//     }
//     break;
//   case "Audi":
//     switch (renk) {
//       case "siyah":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       case "beyaz":
//         console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//         break;
//       default:
//         console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//         break;
//     }
//     break;
//   default:
//     console.log(`Aradığınız ${car} markalı aracımız bulunmamaktadır!`);
//     break;
// }

// const sayi1 = parseInt(prompt("Lütfen birinci sayıyı giriniz"));
// const sayi2 = parseInt(prompt("Lütfen ikinci sayıyı giriniz"));
// const islemTipi = prompt("İşlem tipini seçin");

// switch (islemTipi) {
//   case "+":
//     console.log(`Toplama Sonucu: ${sayi1 + sayi2}`);
//     break;
//   case "-":
//     console.log(sayi1 - sayi2);
//     break;
//   case "*":
//     console.log(sayi1 * sayi2);
//     break;
//   case "/":
//     console.log((sayi1 / sayi2).toFixed(3));
//     break;

//   default:
//     console.log("Hatalı işlem girdiniz!");
//     break;
//}

const myArray = ["Ali", "Engin", 32, true, "elma", "armut", "fasulye"];
console.log(myArray);
myArray[0] = "Mert";
console.log(myArray.length);
const yeniArray = myArray.push("köpek");
console.log(yeniArray);

console.log(myArray.unshift("kedi"));
console.log(myArray);

myArray.pop();
console.log(myArray);
