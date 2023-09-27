// Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

const kelime = "kayak"
const tersKelime = kelime.split("").reverse().join("")
console.log(tersKelime);
if(kelime === tersKelime){
    console.log(`${kelime} kelimesi bir palindromdur`);
} else {
    console.log(`${kelime} kelimesi bir palindrom değildir.`);
}

// Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.

// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.

// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.

let yas = parseInt(prompt("Yaşınızı giriniz..."))
let uyruk = prompt("Uyruğunuzu giriniz").trim().toLowerCase()

if(uyruk !== "türk"){
    console.log("Aday olamazsınız.");
    if(yas >= 18){
        console.log("Oy kullanabilirsiniz");
    } else {
        console.log("Oy kullanamazsınız.");
    }
} else if (yas >= 30){
    console.log("Aday olabilir, Oy kullanabilirsiniz.");
} else if (yas >= 18){
    console.log("Aday olamazsınız, Oy kullanabilirsiniz.");
} else {
    console.log("Aday olamazsınız, Oy kullanamazsınız.");
}