const arabam = {
    marka: "Mercedes",
    model: "GLS600",
    yakitTuru: ["elektrik", "benzin"],
    yil: 2030,
    renk: "lacivert",
    // bataryayiCalistir: function (callback) {
    //   console.log("Batarya çalıştı.");
    //   if (callback) {
    //     callback();
    //   }
    // },
    bataryayiCalistir: function () {
      console.log("Batarya çalıştı.");
      this.hareketEt();
    },
    hareketEt: () => {
      console.log("Hareket etti.");
    },
  };
  
  arabam.bataryayiCalistir();
  // arabam.bataryayiCalistir(arabam.hareketEt());
  // arabam.hareketEt();
  
  const obj1 = { name: "Mehmet", surname: "Öksüz" };
  const obj2 = { name: "Mehmet", surname: "Öksüz" };
  const obj3 = { name: "Ünal", surname: "Berk" };
  const obj4 = obj1;
  console.log("obj1 ? obj2", JSON.stringify(obj1) === JSON.stringify(obj2));
  console.log("obj1 ? obj3", obj1 === obj3);
  console.log("obj1 ? obj4", obj1 === obj4);
  
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  const arr3 = [3, 4, 5];
  const arr4 = arr1;
  console.log("arr1 ? arr2", arr1.toString() === arr2.toString());
  console.log("arr1 ? arr3", arr1 === arr3);
  console.log("arr1 ? arr4", arr1 === arr4);
  
  // * object'e yeni property ekleme
  arabam.vitesTipi = "auto";
  arabam["klimaliMi"] = true;
  console.log(arabam);
  
  // * hasOwnProperty
  if (arabam.hasOwnProperty("yakitTuru")) {
    console.log(arabam.yakitTuru);
  }
  
  // * entries
  // array döner.
  for (const [key, value] of Object.entries(arabam)) {
    if (typeof value !== "function") {
      console.log(`${key}: ${value}`);
    }
  }
  
  // * keys
  console.log(Object.keys(arabam));
  
  // * values
  console.log(Object.values(arabam));
  
  // * freeze
  // Object.freeze(arabam);
  // arabam.prop1 = "value1";
  // arabam.marka = "Volvo";
  // delete arabam.marka;
  // console.log(arabam);
  
  // * seal
  // Object.seal(arabam);
  // arabam.prop1 = "value1";
  // arabam.marka = "Volvo";
  // delete arabam.marka;
  // console.log(arabam);
  
  for (const key of Object.keys(arabam)) {
    console.log(key);
    console.log(arabam[key]);
  }