// const carpma = function(num1,num2){
//     return num1*num2;
// }
// console.log(carpma(5,4));

const carpma = (sayi1, sayi2) => sayi1 * sayi2;
console.log(`Çarpım sonucu: ${carpma(10, 5)}`);

// 2
console.log("Soru-2");

const cumle = "Ali Aysu Engin";
const kelimeSayisiniHesapla = (sentence) => sentence.split(" ").length;

console.log(kelimeSayisiniHesapla(cumle));

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile) Hoisting'e Tabidir.

// 5!=5*4*3*2=120
console.log("Soru-3");
function faktoriyel(sayi) {
  let sonuc = 1;
  for (let i = 1; i <= sayi; i++) {
    // 1   1,2,6,24,120
    sonuc = sonuc * i;
  }
  return sonuc;
}

console.log(faktoriyel(5));

const faktoriyel2 = (sayi) => {
  let sonuc = 1;
  for (let i = 1; i <= sayi; i++) {
    sonuc = sonuc * i;
  }
  return sonuc;
};

console.log(faktoriyel2(5));

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile) Hoisting Çalışmaz !!!!

console.log("Soru-4");

const sayiAsalMi = function (sayi) {
  if (sayi < 2) {
    return false;
  }
  let sayac = 0;
  for (let i = 1; i <= sayi; i++) {
    if (sayi % i == 0) {
      sayac++;
    } else {
      console.log(`${sayi} sayisi asaldır`);
    }
  }
};

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

const myArray = [15, 27, 95, 48, 5, 9, 94];
//myArray.sort((a,b)=> a>b ? -1 : (a < b) ?  1: 0);
//console.log(`En buyuk sayi ${myArray[myArray.length-1]}`);
function enBuyukSayiyiBul(dizi) {
  let enBuyukSayi = dizi[0];
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] > enBuyukSayi) {
      enBuyukSayi = dizi[i];
    }
  }
  return enBuyukSayi;
}
console.log(enBuyukSayiyiBul(myArray));

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
console.log("soru-6");
const myArray2 = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const myArray3 = [2, 3, 4];
function verilenSayilarToplami(dizi2) {
  let toplam = 0;
  for (let i = 0; i < dizi2.length; i++) {
    toplam += dizi2[i];
  }
  return toplam;
}
console.log(verilenSayilarToplami(myArray2));
console.log(verilenSayilarToplami(myArray3));

// 7-

// const fonksiyonismi=("dışarıdan alınan parametreler")=>{işlemler};

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
console.log("Soru-8");

const kelime = "engin";

const tersi = (dizi1) => {
  let tersKelime = "";
  for (let i = dizi1.length - 1; i >= 0; i--) {
    tersKelime += dizi1[i];
  }
  return tersKelime;
};
console.log(tersi(kelime));

// const tersineCevirme = (dizi) => {
//   return [...dizi].reverse().join("");
// };
// console.log(`${kelime} -->${tersineCevirme(kelime)}`);
// console.log(tersineCevirme(kelime));
