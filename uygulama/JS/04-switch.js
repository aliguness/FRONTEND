// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// let ay = prompt("Bir ay ismi giriniz.").trim().toLowerCase();

// switch (ay) {
//   case "ocak":
//   case "mart":
//   case "mayıs":
//   case "temmuz":
//   case "ağustos":
//   case "ekim":
//   case "aralık":
//     console.log(ay + " ayı 31 gün içerir.");
//     break;
//   case "nisan":
//   case "haziran":
//   case "eylül":
//   case "kasım":
//     console.log(ay + " ayı 30 gün içerir.");
//     break;
//   case "şubat":
//     console.log(ay + " ayı 28 gün içerir.");
//     break;
//   default:
//     console.log("Lütfen geçerli bir ay ismi giriniz.");
// }

// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.

let marka = prompt("Bir araç markası giriniz.").trim().toLowerCase();
let renk;
let stokDurumu;

switch (marka) {
  case "bmw":
    renk = prompt("Bir renk seçiniz.").trim().toLowerCase();
    switch (renk) {
      case "siyah":
        stokDurumu = "Var";
        break;
      case "beyaz":
        stokDurumu = "Var";
        break;
      default:
        stokDurumu = "Yok";
        break;
    }
    break;
  case "mercedes":
    renk = prompt("Bir renk seçiniz.").trim().toLowerCase();
    switch (renk) {
      case "gri":
        stokDurumu = "Var";
        break;
      case "mavi":
        stokDurumu = "Var";
      default:
        stokDurumu = "Yok";
        break;
    }
    break;
  case "audi":
    renk = prompt("Bir renk seçiniz.").trim().toLowerCase();
    switch (renk) {
      case "kırmızı":
        stokDurumu = "Var";
        break;
      default:
        stokDurumu = "Yok";
    }
    break;
  default:
    stokDurumu = "Yok";
}

console.log("Stok durumu: " + stokDurumu);
