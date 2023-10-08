// const baslangicSayisi = parseInt(prompt("Başlangıc sayıs giriniz"));
// const bitisSayisi = parseInt(prompt("Bitiş Sayısını Giriniz"));
// let sum = 0;

// for (let i = baslangicSayisi; i <= bitisSayisi; i++) {
//   sum += i;
// }
// console.log(`Toplamları: ${sum}`);

// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let ogrenciSayisi = 5;
// let gecenOgrenciSayisi = 0;
// let toplamNot = 0;

// for (let i = 1; i <= ogrenciSayisi; i++) {
//   let notGiris = parseInt(prompt(`${i}. Öğrencinin notunu giriniz`));
//   toplamNot += notGiris;

//   if (notGiris >= 60) {
//     gecenOgrenciSayisi++;
//   }
// }

// let ortalama = toplamNot / ogrenciSayisi;
// console.log(
//   `Sınıf Not ortalması: ${ortalama} ve Geçen öğrenci sayısı ${gecenOgrenciSayisi}`
// );

// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

const randomSayi = Math.floor(Math.random() * 10) + 1;
console.log(randomSayi);
let hak = 3;
let tahmin = Number(prompt());

while (randomSayi != tahmin && hak > 0) {
  tahmin = parseInt(prompt("Lütfen 1-10 arası sayı giriniz."));
  if (tahmin > randomSayi) {
    console.log("Tahmin ettiğiniz sayı randomSayidan büyüktür.");
    hak--;
  } else if (tahmin < randomSayi) {
    console.log("Tahmin ettiğiniz sayı randomSayidan küçüktür");
    hak--;
  } else {
    console.log("Doğru cevap");
  }
}
if (hak > 0) {
  console.log(`${4 - hak}. tahmininizde bildiniz`);
} else {
  console.log("Bilemediniz");
}

// -------------------While, Alışveriş Sepeti Uygulaması-----------------------

// Kurallar:

// While döngüsü kullanılacak.

// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.

// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.

// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
let toplamFiyat = 0;
let urunAd;
let urunFiyat;
let urunler = [];

while (urunAd != "onayla") {
  urunAd = prompt(
    "Lütfen ürün ismi giriniz veya toplam sepeti görmek için onayla yazın.."
  );

  if (urunAd != "onayla") {
    urunFiyat = parseInt(prompt("Lütfen ürün fiyatını giriniz.."));
    urunler.push([urunAd, urunFiyat]);
    toplamFiyat += urunFiyat;
  }
}

console.log(urunler);
console.log(`Toplam seperiniz: ${toplamFiyat}`);
