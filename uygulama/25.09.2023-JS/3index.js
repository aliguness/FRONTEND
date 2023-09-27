// 1- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
var kelime = prompt("Bir kelime giriniz: ");

var tersKelime = kelime.split( '' ).reverse( ).join( '' ); 

if (kelime == tersKelime) { 
    console.log("Girilen kelime palindromdur."); 
} else { 
    console.log("Girilen kelime palindrom değildir."); 
}

// 2- Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.

// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir. 

// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.
var yas = prompt("Yaşınızı giriniz: ");
yas = parseInt(yas);
var uyruk = prompt("Uyruğunuzu giriniz (Türk/Yabancı): ");
var adaylıkDurumu;
var oyKullanma;

if (uyruk == "Türk") {
    if (yas >= 30) {
        adaylıkDurumu = "Aday Olabilir";
        oyKullanma = "Oy Kullanabilir";
        console.log("Adaylık Durumu: " + adaylıkDurumu);
        console.log("Oy Kullanma Durumu: " + oyKullanma);
    } else if (yas >= 18) {
        adaylıkDurumu = "Aday Olamaz";
        oyKullanma = "Oy Kullanabilir";
        console.log("Adaylık Durumu: " + adaylıkDurumu);
        console.log("Oy Kullanma Durumu: " + oyKullanma);
    } else {
        adaylıkDurumu = "Aday Olamaz";
        oyKullanma = "Oy Kullanamaz";
        console.log("Adaylık Durumu: " + adaylıkDurumu);
        console.log("Oy Kullanma Durumu: " + oyKullanma);
    }
} else {
    if (uyruk == "Yabancı") {
        if (yas >= 18) {
            adaylıkDurumu = "Aday Olamaz";
            oyKullanma = "Oy Kullanabilir";
            console.log("Adaylık Durumu: " + adaylıkDurumu);
            console.log("Oy Kullanma Durumu: " + oyKullanma);
        }
    }
}

// 3- Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)
var ayIsmi = prompt("Bir Ay İsmi Giriniz: ");
ayIsmi.toLowerCase();

switch (ayIsmi) {
    case "ocak":
        console.log("31 Gün");
        break;
    case "şubat":
        console.log("28 Gün");
        break;
    case "mart":
        console.log("31 Gün");
        break;
    case "nisan":
        console.log("30 Gün");
        break;
    case "mayıs":
        console.log("31 Gün");
        break;
    case "haziran":
        console.log("30 Gün");
        break;
    case "temmuz":
        console.log("31 Gün");
        break;
    case "ağustos":
        console.log("31 Gün");
        break;
    case "eylül":
        console.log("30 Gün");
        break;
    case "ekim":
        console.log("31 Gün");
        break;
    case "kasım":
        console.log("30 Gün");
        break;
    case "aralık":
        console.log("31 Gün");
        break;
    default:
        console.log("Hatalı Giriş");
        break;
}

// 4- BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.
var marka = prompt("Marka Giriniz (BMW, Mercedes ve Audi): ");
marka.toLowerCase();
var renk = prompt("Renk Giriniz (Siyah, Beyaz ve Kırmızı): ");
renk.toLowerCase();
var stokDurumu = "Yok";

switch (marka) {
    case "bmw":
        switch (renk) {
            case "siyah":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            case "kırmızı":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "mercedes":
        switch (renk) {
            case "siyah":
                stokDurumu = "Var";
                break;  
            case "beyaz":
                stokDurumu = "Var";
                break;
            case "kırmızı":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    case "audi":
        switch (renk) {
            case "siyah":
                stokDurumu = "Var";
                break;
            case "beyaz":
                stokDurumu = "Var";
                break;
            case "kırmızı":
                stokDurumu = "Var";
                break;
            default:
                stokDurumu = "Yok";
                break;
        }
        break;
    default:
        stokDurumu = "Yok";
        break;
}
console.log(stokDurumu);