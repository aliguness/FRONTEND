const sayi1 = parseInt(prompt("Lütfen birinci sayıyı giriniz"));
//const sayi2 = parseInt(prompt("Lütfen ikinci sayıyı giriniz"));

//girilen sayının çift mi tek mi ya da 0 mı olduğunu bulalım?
// ayrıca bu sayının negatif mi pozitif mi?
// Girilen sayının sayı 2  ile bölmünden kalan kaçtır.

if (sayi1 % 2 === 0) {
  console.log(`${sayi1} Sayısı ÇİFT`);
} else {
  console.log(`${sayi1} Tektir`);
}
if (sayi1 > 0) {
  console.log(`${sayi1} Pozitif Sayıdır.`);
} else if (sayi1 < 0) {
  console.log(`${sayi1} Negatif Sayıdır.`);
} else {
  console.log(`${sayi1}Sayısı sıfır!`);
}
