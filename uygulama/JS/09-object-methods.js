// 1- myObject isimli boş bir nesne oluşturun.
const myObject = {};
// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
myObject.isim = "Cem Mert Şimşek";
myObject.yas = 29;
myObject.cinsiyet = "Erkek";
myObject.meslek = "Software Developer";
console.log(myObject);
// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
delete myObject.cinsiyet;
console.log(myObject);
// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
const copyOfMyObject = Object.assign({}, myObject);
console.log(copyOfMyObject);
// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log(Object.keys(myObject));
// 6- nesnenizin değerlerini konsola yazdırın.
console.log(Object.values(myObject));
// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
console.log(Object.entries(myObject));
// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
console.log(myObject.hasOwnProperty("isim"));
// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
Object.freeze(myObject);
myObject.isim = "Cem";
delete myObject.isim;
myObject.adres = "Istanbul";
console.log(myObject);
// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
Object.seal(copyOfMyObject);
copyOfMyObject.isim = "Cem";
delete copyOfMyObject.isim;
copyOfMyObject.adres = "Istanbul";
console.log(copyOfMyObject);

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.

/*(örn çıktı:

05.01.2020 balata değişimi - 1700 TL

05.01.2020 yağ değişimi - 700 TL

05.01.2020 boya koruma - 700 TL

...

...

...

28.08.2022 seramik kaplama - 4500 TL

)

*/

const aracBilgileri = {
  id: "audiA6_123",

  model: "audiA6",

  yil: 2019,

  renk: "kırmızı",

  servisKayitlari: [
    {
      id: "audiA6_123_1",

      tarih: "05.01.2020",

      km: 2500,

      ucret: 3000,

      detay: [
        {
          id: "audiA6_123_1_1",

          aciklama: "balata değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_123_1_2",

          aciklama: "yağ değişimi",

          ucret: 700,
        },

        {
          id: "audiA6_123_1_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_123_2",

      tarih: "25.06.2021",

      km: 10500,

      ucret: 5000,

      detay: [
        {
          id: "audiA6_123_2_1",

          aciklama: "balata değişimi",

          ucret: 2700,
        },

        {
          id: "audiA6_123_2_2",

          aciklama: "yağ değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_123_2_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_123_3",

      tarih: "28.08.2022",

      km: 25400,

      ucret: 10000,

      detay: [
        {
          id: "audiA6_123_3_1",

          aciklama: "balata değişimi",
          ucret: 3500,
        },
        {
          id: "audiA6_123_3_2",
          aciklama: "yağ değişimi",
          ucret: 2000,
        },
        {
          id: "audiA6_123_3_3",
          aciklama: "seramik kaplama",
          ucret: 4500,
        },
      ],
    },
  ],
};

const ucretDetay = (object) => {
  const kayit = object.servisKayitlari;
  // console.log(kayit);
  kayit.forEach((e) => {
    let tarih = e.tarih;
    e.detay.forEach((e) =>
      console.log(tarih + " " + e.aciklama + " - " + e.ucret + " TL")
    );
  });
};
ucretDetay(aracBilgileri);
// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

const student = {
  name: "Cem",
  yas: 29,
  cinsiyet: "Erkek",
};

const ozellikYazdir = (nesne) => {
  for (let key in nesne) {
    console.log(key + ": " + nesne[key]);
  }
};

ozellikYazdir(student);

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

const students = [
  { name: "Cem", grades: [40, 30, 50] },
  { name: "Ahmet", grades: [80, 90, 50] },
  { name: "Serkan", grades: [60, 70, 50] },
];

const basariDurumu = (students) => {
  const gecerNot = 60;

  for (let student of students) {
    let total = 0;
    for (let grade of student.grades) {
      total += grade;
    }
    
    const average = total / student.grades.length;
    if (average >= gecerNot) {
      console.log(student.name + " Dersi başarıyla geçmiştir.");
    } else {
      console.log(student.name + " Başarısız olmuştur.");
    }
  }
};

basariDurumu(students);