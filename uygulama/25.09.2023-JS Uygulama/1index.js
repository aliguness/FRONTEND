const LOREM_STORY = "Lorem ipsum possimus dolor sit amet consectetur possimus adipisicing elit. Odit dolores accusantium, possimus inventore dolore quidem aut sapiente. Quibusdam possimus recusandae illum possimus incidunt possimus perferendis, pariatur unde velit earum possimus animi! Voluptatibus, possimus qui exercitationem.";

console.log('%cHello World', 'background: #222; color: #bada55');

//1-Yazdığınız hikayenin uzunluğunu yazdırın.
console.log("Hikayenin Uzunluğu: " + LOREM_STORY.length);

//2-Hikayenin toplam index sayısı kaçtır.
console.log("Toplam Index Sayısı: " + ((LOREM_STORY.length) - 1));

//3-String içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.
var word = "possimus";
var myIndex = LOREM_STORY.indexOf(word);
var lastIndex = LOREM_STORY.lastIndexOf(word);
console.log("İlk " + word + " Kelimesinin İndexi: " + myIndex);
console.log("Son " + word + " Kelimesinin İndexi: " + lastIndex);

//4-İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log("İlk 15 Karakter (Yöntem 1): " + LOREM_STORY.substring(0, 15));
console.log("İlk 15 Karakter (Yöntem 2): " + LOREM_STORY.slice(0, 15));

// 5- 15. karakterden sonrasını yazdıralım (2 farklı yöntem)
console.log("15. Karakterden Sonrası (Yöntem 1): " + LOREM_STORY.substring(15));
console.log("15. Karakterden Sonrası (Yöntem 2): " + LOREM_STORY.slice(15));

// 6- Son 5 karakteri yazdıralım (2 farklı yöntem)
console.log("Son 5 Karakter (Yöntem 1): " + LOREM_STORY.slice(-5));
console.log("Son 5 Karakter (Yöntem 2): " + LOREM_STORY.substring(LOREM_STORY.length - 5));

// 7- 11. karakterden sonra gelen 10 karakteri yazdıralım.
console.log("11. Karakterden Sonraki 10 Karakter: " + LOREM_STORY.slice(11, 21));

// 8- Son 5 karakter hariç hikayeyi yazdıralım.
console.log("Son 5 Karakter Haricindeki Hikaye: " + LOREM_STORY.slice(0, -5));

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
var arananKelime = "illum";
var kelimeIceriyorMu = LOREM_STORY.includes(arananKelime);
console.log("Hikaye, '" + arananKelime + "' kelimesini içeriyor mu? " + kelimeIceriyorMu);

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
var duzeltilmisHikaye = LOREM_STORY.replace(/i/g, "ı");
console.log("Tüm 'i' karakterleri 'ı' ile değiştirilmiş hikaye: " + duzeltilmisHikaye);

// 11- Hikayenizdeki "a" karakterini "e" ye çevirin.
duzeltilmisHikaye = LOREM_STORY.replace(/a/g, "e");
console.log("Tüm 'a' karakterleri 'e' ile değiştirilmiş hikaye: " + duzeltilmisHikaye);

// 12- Bütün metni büyük harfe çevirin.
var buyukHarfHikaye = LOREM_STORY.toUpperCase();
console.log("Büyük Harfli Hikaye: " + buyukHarfHikaye);

// 13- Bütün metni küçük harfe çevirin.
var kucukHarfHikaye = LOREM_STORY.toLowerCase();
console.log("Küçük Harfli Hikaye: " + kucukHarfHikaye);


// 14- Kullanıcıdan bir isim isteyin ve bir değişkene atayın.
var kullaniciIsmi = prompt("Lütfen isminizi girin: ");

// a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
console.log("Hoşgeldin, " + kullaniciIsmi);

// b- Yukarıdaki çıktının aynısını template literal kullanarak konsola yazdırın.
console.log(`Hoşgeldin, ${kullaniciIsmi}`);

// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun.
var metin = " " + kullaniciIsmi + " ";
console.log(metin);

// a- Başındaki boşlukları kaldırın.
metin = metin.trimStart();
console.log(metin);

// b- Sonundaki boşlukları kaldırın.
metin = metin.trimEnd();
console.log(metin);

// c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
var bosluksuzMetin = metin.trim();
console.log(bosluksuzMetin);

// 16- Çıktıyı uygun metotları kullanarak "Benim Adım: İsim" yazacak hale getirin.
var duzeltilmisMetin = "Benim Adım: " + kullaniciIsmi.toUpperCase().charAt(0) + kullaniciIsmi.slice(1).toLowerCase();
console.log(duzeltilmisMetin);

// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun.
alert(`"${kullaniciIsmi}" ara vakti. İyi dinlenmeler`);