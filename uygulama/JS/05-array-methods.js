// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
// 3- dizinin uzunluğunu konsola yazdırın.
// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
// 10- myArray içerisinde eleman olarak "Veli" var mı ?
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
const myArray = [
  "Cem","Şimşek",29,true,"erik","çilek","karpuz","kivi","Kebap","Çorba",
];
console.log(myArray);
// 2- 
myArray[0] = "Mert";
console.log(myArray);
// 3- 
console.log(myArray.length);
// 4- 
let pushedLength = myArray.push("kedi"); // push metodu dizinin yeni uzunluğunu döner
console.log(myArray);
console.log(pushedLength);
// 5- 
let unshiftedLength = myArray.unshift("aslan"); // unshift metodu dizinin yeni uzunluğunu döner.
console.log(myArray);
console.log(unshiftedLength);
// 6- 
let silinenEleman = myArray.pop(); // pop metodu silinen elemanı döner.
console.log(myArray);
console.log(silinenEleman);
// 7- 
let shift = myArray.shift(); // shift metodu silinen elemanı döner.
console.log(myArray);
console.log(shift);
console.log(myArray.length);
// 8- 
const newArray = [pushedLength,unshiftedLength,silinenEleman,shift,myArray.length,];
console.log(newArray);
// 9- 
const thirdArray = myArray.concat(newArray);
console.log(thirdArray);
const spreadedArray = [...myArray, ...newArray];
console.log(spreadedArray);
// 10-
console.log(myArray.includes("Veli"));
// 11- 
console.log(myArray.includes("patates", 3)); // patates yok
console.log(myArray.includes("kivi", 1)); // kivi var
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log(myArray.indexOf("erik"));
console.log(myArray.indexOf("erik1")); //dizide yok -1 döner.
// 13- 
const slicedArray = thirdArray.slice(0, 3);
console.log(slicedArray);
// 14-
console.log(slicedArray.splice(1, 1, "Anıl", "Murat")); //splice silinen elemanı geri döndürür. konsolda sadece silinen elemanı gördük.
console.log(slicedArray);
// 15- 
slicedArray.splice(2,1,"Kerem","Burak")
console.log(slicedArray);
// 16-
console.log(slicedArray.join(" + ")); 
