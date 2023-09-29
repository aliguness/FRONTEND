// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((eleman, index) => {
  console.log(`${index + 1}. Eleman ${eleman}`);
});
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((eleman) => {
  if (eleman % 2 === 0) {
    console.log(eleman);
  }
});
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const carpimlar = [];
dizi.forEach((e) => carpimlar.push(e * 2));
console.log(dizi);
console.log(carpimlar);
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let toplam = 0;
dizi.forEach((e) => 2 + 5);
console.log(toplam);
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
dizi1.forEach((eleman, index) => {
  if (index === dizi1.length - 1) {
    console.log("Son eleman: " + eleman);
  } else {
    console.log(eleman);
  }
});
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
const buyukHarfler = dizi1.map((eleman) => eleman.toUpperCase());
// const buyukHarfler1 = dizi1.map((eleman) => eleman.toLocaleUpperCase('TR'))
console.log(dizi1);
console.log(buyukHarfler);
// console.log(buyukHarfler1);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const rastgeleDizi = dizi.map((e) => e + Math.ceil(Math.random() * 9 + 1));
console.log(rastgeleDizi);
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const string = "Merhaba benim adım Cem";
const tersKelimeler = string.split(" ").map(kelime => kelime.split("").reverse().join(""))

console.log(tersKelimeler);
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const stringDizi = dizi.map(e => e.toString())
console.log(stringDizi);
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const tersCevir = (string) => {
    let tersString = "";
    for(let i = string.length - 1; i >= 0; i--){
        tersString += string[i]
    }
    return tersString
}

const tersDizi = dizi1.map(e => tersCevir(e))
console.log(tersDizi);


// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const ciftSayilar = dizi.filter(eleman => eleman % 2 === 0)
console.log(ciftSayilar);
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
let uzunluk = 4
const kisaString = dizi1.filter(e => e.length === uzunluk)
console.log(kisaString);
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const diziToplam = dizi.reduce((accumulator, currentValue) => accumulator + (currentValue + 2),0)
console.log(diziToplam);
// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const ilkCiftSayi = dizi.find(e => e % 2 === 0)
console.log(ilkCiftSayi);
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const sonCiftSayi = dizi.findLast(e => e % 2 === 0)
console.log(sonCiftSayi);
// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const negatifVarMi = dizi2.some(e => e<0)
console.log(negatifVarMi);
// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const hepsiPozitifMi = dizi3.every(e => e>0)
console.log(hepsiPozitifMi);
// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const siraliDizi = dizi3.sort((a,b)=>  a-b)

console.log(dizi3);
console.log(siraliDizi);

const dizi4 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
const siraliDizi2 = dizi4.toSorted((a,b) => a-b)
console.log(dizi4);
console.log(siraliDizi2);