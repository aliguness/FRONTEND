//          VAR                     LET                                        CONST
// ramde sürekli yer kaplar.     Sadece scope alanı içerisinde işler.   Final gibi.Sabit'tir.

// -- Birkaç cümleden oluşan bir hikaye yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
const myStory = "Sadece iyi değil mükemmel iyi günler diliyorum.";
console.log(myStory);
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log("soru-1: ");
console.log(myStory.length);
// 2- Hikayenin toplam index sayısı kaçtır.
console.log("soru-2: ");
console.log(myStory.length-1);
// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
console.log("soru-3: ");
console.log(myStory.indexOf("iyi"));
console.log(myStory.lastIndexOf("iyi"));
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log("soru-4:");
console.log(myStory.substring(0,15));
console.log(myStory.slice(0,15));
// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)
console.log("soru-5");
console.log(myStory.substring(15,myStory.length));
console.log(myStory.slice(15));

// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
console.log("soru-6");
console.log(myStory.substring(myStory.length-5));
console.log(myStory.substring(myStory.length-5, myStory.length));
console.log(myStory.slice(-5));

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log("soru-7");
console.log(myStory.substring(11,21));
// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log("soru-8");
console.log(myStory.substring(0,(myStory.length-5)));
console.log(myStory.slice(0,-5));

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
console.log("soru-9");
console.log(myStory.includes("iyi"));

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
console.log("Soru-10");
console.log(myStory.replaceAll('i','ı'));

// 11- Hikayenizdeki "a" karakterini "e" ye çevirin.
console.log("Soru-11");
console.log(myStory.replaceAll('a', 'e'));
// 12- Bütün metni büyük harfe çevirin.
console.log("soru-12");
console.log(myStory.toUpperCase());
// 13- Bütün metni küçük harfe çevirin.
console.log("soru-13");
console.log(myStory.toLowerCase());
// -----------------------------------------------
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
let userName =prompt("<NAME>: ") ;
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
alert(`Hoşgeldin ${userName}`);
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"
console.log("benim adım: "+userName);


// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun. 
//   a- Başındaki boşlukları kaldırın.
//   b- Sonundaki boşlukları kaldırın.
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"
