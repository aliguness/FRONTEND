// 1-) Negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
const negatifSayi = -5;
const mutlakDeger = Math.abs(negatifSayi);
console.log("Mutlak Değer: ", mutlakDeger);

// 2-) Ondalıklı bir sayıyı yukarıya yuvarlayın.
const ondalikliSayi1 = 3.7;
const yukariYuvarlanmis = Math.ceil(ondalikliSayi1);
console.log("Yukarı Yuvarlanmış: ", yukariYuvarlanmis);

// 3-) Ondalıklı bir sayıyı aşağıya yuvarlayın.
const ondalikliSayi2 = 3.7;
const asagiYuvarlanmis = Math.floor(ondalikliSayi2);
console.log("Aşağı Yuvarlanmış: ", asagiYuvarlanmis);

// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
const sayilar = [6, 15, -7, 0, 80, -35];
const enBuyukSayi = Math.max(...sayilar);
console.log("En Büyük Sayı: ", enBuyukSayi);

// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
const enKucukSayi = Math.min(...sayilar);
console.log("En Küçük Sayı: ", enKucukSayi);

// 6-) Ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
const ondalikliSayi3 = 3.456789;
const yuvarlanmisSayi = ondalikliSayi3.toFixed(3);
console.log("Yuvarlanmış Sayı: ", yuvarlanmisSayi);

// 7-) Bir sayının karekökünü bulun.
const sayi = 16;
const karekok = Math.sqrt(sayi);
console.log("Karekök: ", karekok);

// 8-) Bir sayının üstel fonksiyonunu bulun. (x üzeri y)
const taban = 2;
const us = 3;
const sonuc = Math.pow(taban, us);
console.log("Üstel Sonuç: ", sonuc);

// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
const ondalikliSayi4 = 123.456789;
const formatliSayi = ondalikliSayi4.toPrecision(6);
console.log("Formatlı Sayı: ", formatliSayi);

// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
const ondalikliSayi5 = 123.456789;
const tamSayi = Math.trunc(ondalikliSayi5);
console.log("Tam Sayı: ", tamSayi);