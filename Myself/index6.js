// 1- myObject isimli boş bir nesne oluşturun.

console.log("Soru-1");
const myObject = {};
//myObject["name"]="Ali"; //object içindeki key değerini tanımlıyoruz.

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
console.log("Soru-2");

myObject.isim = "Alex De Souza";
myObject.yas = 32;
myObject.gender = "Male";
myObject.meslek = "Mühendis";
console.log(myObject);

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
console.log("Soru-3");
delete myObject.gender;
console.log(myObject);

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
console.log("Soru-4");

const copyMyObject = Object.assign({ adres: "İzmir" }, myObject);
console.log(copyMyObject);

// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log("Soru-5");
console.log(Object.keys(myObject));
console.log(Object.keys(copyMyObject));
//Object.keys methodu sonuclari bize array doner.

// 6- nesnenizin değerlerini konsola yazdırın.
console.log("Soru-6");
console.log(Object.values(myObject));
console.log(Object.values(copyMyObject));

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
console.log("Soru-7");

console.log(Object.entries(myObject));
//Her key-value çiftinin herbirinin değerlerini ayrı ayrı döner. Hepsini de tek bir array içinde döner.

// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
console.log("Soru-8");
console.log(myObject.hasOwnProperty("yas"));
console.log(myObject.hasOwnProperty("meyve"));

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
console.log("Soru-9");
// Object.freeze(myObject);
// myObject.isim="Osman";
// console.log(myObject);
// delete myObject.yas;
// console.log(myObject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
console.log("Soru-10");

Object.seal(myObject);
myObject.isim = "adnan";
console.log(myObject);

console.log("************************");

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.

const aracBilgileri = {
  id: "audiA6",

  model: "audiA6",

  yil: 2019,

  renk: "kırmızı",

  servisKayitlari: [
    {
      id: "audiA6_Servis_1",

      tarih: "05.01.2020",

      km: 2500,

      ucret: 3000,

      detay: [
        {
          id: "audiA6_Servis_1_1",

          aciklama: "balata değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_Servis_1_2",

          aciklama: "yağ değişimi",

          ucret: 700,
        },

        {
          id: "audiA6_Servis_1_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_Servis_2",

      tarih: "25.06.2021",

      km: 10500,

      ucret: 5000,

      detay: [
        {
          id: "audiA6_Servis_2_1",

          aciklama: "balata değişimi",

          ucret: 2700,
        },

        {
          id: "audiA6_Servis_2_2",

          aciklama: "yağ değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_Servis_2_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_Servis_3",

      tarih: "28.08.2022",

      km: 25400,

      ucret: 10000,

      detay: [
        {
          id: "audiA6_Servis_3_1",

          aciklama: "balata değişimi",
          ucret: 3500,
        },
        {
          id: "audiA6_Servis_3_2",
          aciklama: "yağ değişimi",
          ucret: 2000,
        },
        {
          id: "audiA6_Servis_3_3",
          aciklama: "seramik kaplama",
          ucret: 4500,
        },
      ],
    },
  ],
};
console.log(aracBilgileri);

const ucretDetay = (object) => {
  const kayit = object.servisKayitlari;
  kayit.forEach((e) => {
    let servisTarihi = e.tarih;
    e.detay.forEach((a) => {
      console.log(servisTarihi + " " + a.aciklama + " " + a.ucret + " TL");
    });
  });
};
ucretDetay(aracBilgileri);

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

const ortalamaHesapla = () => {
  arr.forEach((arr) => {
    for (let i of arr.grades) {
    }
  });
};

const ucretDetay1 = (object) => {
  object.servisKayitlari.forEach((e) => {
    let servisTarihi = e.tarih;
    e.detay.forEach((a) => {
      console.log(servisTarihi + " " + a.aciklama + " " + a.ucret + " TL");
    });
    console.log("************");
  });
};
ucretDetay1(aracBilgileri);

const student = {
  fname: "Ali",
  sname: "Güneş",
  age: 32,
  gender: "Male",
};
for (let i in student) {
  console.log(i + ": " + student[i]);
}

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

const students = [
  { name: "Ali", grades: [40, 30, 50] },
  { name: "Ahmet", grades: [80, 90, 50] },
  { name: "Serkan", grades: [60, 70, 50] },
];

const basariDurumu = (arr) => {
  for (let i of arr) {
    let toplam = 0;
    for (let j of i.grades) {
      toplam += j;
    }
    const ortalamaHesapla = Math.ceil(toplam / i.grades.length);
    if (ortalamaHesapla >= 60) {
      console.log(
        `${i.name}'in ortalaması ${ortalamaHesapla}, bu sebeple başarılı bir öğrencidir`
      );
    } else {
      console.log(
        `${i.name}'in ortalaması ${ortalamaHesapla}, bu sebeple geçer not alamamıştır`
      );
    }
  }
};

basariDurumu(students);
