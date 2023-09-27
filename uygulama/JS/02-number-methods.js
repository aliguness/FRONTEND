// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
// 7-) bir sayının karekökünü bulun.
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
// 1- negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
let number1 = -5;
let absoluteValue = Math.abs(number1);
console.log(absoluteValue); // 5
// 2- ondalıklı bir sayıyı yukarıya yuvarlayın.
let number2 = 3.4;
let ceiledNumber = Math.ceil(number2);
console.log(ceiledNumber); // 4
// 3- ondalıklı bir sayıyı aşağıya yuvarlayın.
let number3 = 7.9;
let flooredNumber = Math.floor(number3);
console.log(flooredNumber); // 7
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
let maxNumber = Math.max(6, 15, -7, 0, 80, -35);
console.log(maxNumber); // 80
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
let minNumber = Math.min(6, 15, -7, 0, 80, -35);
console.log(minNumber); // -35
// 6- ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let number4 = 3.14159;
let fixedNumber = number4.toFixed(3);
console.log(fixedNumber); // 3.142
// 7- bir sayının karekökünü bulun.
let number5 = 25;
let sqrtNumber = Math.sqrt(number5);
console.log(sqrtNumber); // 5
// 8- bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let base = 2;
let exponent = 5;
let result = Math.pow(base, exponent);
console.log(result); // 32
// 9- 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let number6 = 123.456789;
let formattedNumber = number6.toPrecision(6);
console.log(formattedNumber); // 123.457
// 10- 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
let number7 = 123.456789;
let truncedNumber = Math.trunc(number7);
console.log(truncedNumber); // 123