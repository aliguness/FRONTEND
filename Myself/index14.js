const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

// https://jsonplaceholder.typicode.com URL'ine istek atın. Her bir isteği bir kere then 1 kere de async/await yöntemi ile atın. update isteklerini put ve patch şeklinde ayrı ayrı atın. Toplamda 5 adet then, 5 adet adet async/await isteği atacaksınız.
// getCommentById, getAllComments, deleteComment, updateComment(put, patch)

// const getAllCommentsThen = fetch(url + commentsURL + "/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Hata alındı ${error}`);
//   });

// const getAllCommentsAsync = async (commentId) => {
//   const response = await fetch(url + commentsURL + "/" + commentId);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };
// getAllCommentsAsync(1);

//fetch içindeki kısma istek at(url). onu ilk then içine attık(response verdik) eğer istek başarılı atıldıysa. ilk then(response) içine veririz. Eğer url'e istek düzgün atıldıysa bize dön. return response.json bize döner ve 2. then(data) içerisine onu veririz. sonra yazdırırız.
// 1.then (deyip fetch'e attığımız isteğin cevabını aldık) cevap alırız 2.then doğru oldugunda veriyi yazdırdığımız kısım. 3.catch hatayı yazdırdırdığımız kısım. (burası runtime yani çalışma zamanı hatası olması durumunda bize çıktı olarak döner)
// -- FETCH yapısı direk çalışır.çağırmaya gerek yok.--
// FETCH içine bir url verilir
// const getAllCommentsThen = fetch(url + commentsURL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("get all comments", data);
//   })
//   .catch((error) => {
//     console.log(`hata alindi ${error}`);
//   });

//arrow  function içinde response nesnesi üretip içine fetch() verdik. const response eşitledik.
//!response.ok değeri dönmezse. yani cevabını alamadıysak hiç bekleme gel hatayı fırlat.
//if'e girmezse cons data'ya response.json() JS nesnesine çevir data'ya ata. sonra console'a yazdır.
const getAllCommentsAsync = async () => {
  try {
    const response = await fetch(url + commentsURL);
    if (!response.ok) {
      //eğer response'da cevap başarısız veya boş geldiyse bunu
      throw new Error("Hata alındı" + response.status);
    }
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("bir hata oluştu" + error);
  }
};
getAllCommentsAsync();

// arrow function'ımızı açtık.
//fetch() yapımızı kuruyoruz. fetch ile url kısmına istek attık. response değişkenine atadık. hemen altında biz bu isteği okuyamayızo yğzden js nesnesine dönüştürdük. onuda data değişkenşnde tuttuk. Sonra yakaladığımız veriyi yani fetchden dönen cevabı atadığımız data'yı yazdırıyoruz.
// Genel bir hata kontrolünü de try{}catch{} içerisinde

//GET ile sadece verileri ekrana yazdırıyoruz.

// const getAllCommentsThen = fetch(url + commentsURL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("get all comments", data);
//   })
//   .catch((error) => {
//     console.log("hata alındı.", error);
//   });

// const getAllCommentsAsync1 = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/505");
//     let data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Bir Hata Oluştu", error);
//   }
// };

// getAllCommentsAsync1();

// const getCommentByIdThen = fetch(url + commentsURL + "/4")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("datamız:", data);
//   })
//   .catch((error) => {
//     console.log("hata alındı", error);
//   });

// const getCommentByIdAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/4");
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("HATA ALINDI", error);
//   }
// };
// getCommentByIdAsync();

// put method'u
const newComment = {
  postId: "1",
  name: "aliosso",
  email: "alig@gmail.com",
  location: "kars",
};

const putCommentsThen = fetch(url + commentsURL + "/4", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newComment),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("put komutunu kullandik", data);
  })
  .catch((error) => {
    console.log("hata aldık:", error);
  });
