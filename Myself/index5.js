// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

console.log("soru-1");

dizi.forEach((eleman, index) => {
  console.log(`${index + 1}. eleman ${eleman}`);
});

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.

dizi.forEach((eleman) => {
  if (eleman % 2 == 0) {
    console.log(eleman);
  } else {
    console.log(`${eleman} çift değil.`);
  }
});

// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const newArray = [];
dizi3.forEach((e) => {
  newArray.push(e * 2);
});
console.log(newArray);
console.log(dizi3);

// newArray.forEach((eleman)=>{
//     console.log(`${eleman}`);
// })

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)

let sum = 0;
dizi.forEach((e) => {
  sum += e;
});
console.log(`Dizinin elemanlarinin Toplami: ${sum}`);

// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
// dizi.forEach((eleman, index) => {
//   if (index == dizi.length - 1) {
//     alert(`Son eleman: ${eleman}`);
//   } else {
//     console.log(eleman);
//   }
// });

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.

const yeniDizi = dizi1.map((eleman) => eleman.toUpperCase());
console.log("Yeni Dizi:", yeniDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.

const yeniDizi2 = dizi.map((e) => Math.ceil(Math.random() * 10) + e);
console.log(`Yeni Dizi2: ${yeniDizi2}`);

// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const kelime = "Merhaba Dünya";
const tersKelimeler = kelime
  .split(" ")
  .map((e) => e.split("").reverse().join(""));
console.log(`Ters Kelimeler: ${tersKelimeler}`);

// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.

const stringDizi = dizi.map((e) => e.toString());
console.log(stringDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const kelimeler1 = ["ali", "aysu", "engin", "ece", "ayşe"];

const tersDizi = kelimeler1.map((e) => {
  tersIsim = "";
  for (i = e.length - 1; i >= 0; i--) {
    tersIsim += e[i];
  }
  return tersIsim;
});

console.log(tersDizi);

const yeniBirDizi = kelimeler1.map((eleman) => {
  let tersDizi = "";
  for (let i = eleman.length; i >= 0; i--) {
    tersDizi += eleman[i];
  }
  return tersDizi;
});
console.log(yeniBirDizi);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const ciftSayilar = dizi.filter((eleman) => eleman % 2 == 0);
console.log(ciftSayilar);

const ciftSayilar2 = dizi.map((e) => {
  if (e % 2 == 0) {
    console.log(e);
  } else {
    console.log("Tek sayılar", e);
  }
});
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.

let uzunluk = 4;
const esitString = kelimeler1.filter((e) => e.length == 4);
console.log(esitString);

const kisaString = kelimeler1.filter((e) => e.length < 4);
console.log(kisaString);

const uzunString = kelimeler1.filter((e) => e.length > 4);
console.log(uzunString);

// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const diziToplam = dizi.reduce(
  (toplam, elemanIndex) => toplam + (elemanIndex + 2),
  0
);
console.log(diziToplam);
