const arabam = {
    marka: "Mercedes",
    model: "GLS600",
    yakitTuru: "elektrik",
    yil: 2030;
    renk: "Lacivert",
    bataryayiCalistir: function (callback) {
        console.log("Batarya çalıştı.");
        if (callback) {
          callback();  
        }
    },
    hareketEt: function () {
        console.log("Hareket etti. ");
    },
}
arabam.bataryayiCalistir(arabam.hareketEt());
// arabam.hareketEt();