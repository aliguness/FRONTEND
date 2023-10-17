const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";
const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const comment

// const getRequest = (callBackFunction, endPoint) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", endPoint);
//   request.onreadystatechange = () => {
//     if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callBackFunction(null, data);
//     } else if (request.readyState === XMLHttpRequest.DONE) {
//       let error = `Hata aldık. Hata kodumu: ${request.status}`;
//       callBackFunction(error, null);
//     }
//   };
//   request.send();
// };

// const callBackFunctionAysu = (error, response) => {
//   if (response) {
//     console.log("Response", response);
//   } else {
//     console.error(`Error`, error);
//   }
// };

//getRequest(callBackFunctionAysu, `${url}${userURL}`);

// getRequest((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//     getRequest((error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(response);
//         getRequest((error, response) => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(response);
//             getRequest((error, response) => {
//               if (error) {
//                 console.log(error);
//               } else {
//                 console.log(response);
//                 getRequest((error, response) => {
//                   if (error) {
//                     console.log(error);
//                   } else {
//                     console.log(response);
//                   }
//                 }, `${jsonplaceholderURL}users/5`);
//               }
//             }, `${jsonplaceholderURL}users/4`);
//           }
//         }, `${jsonplaceholderURL}users/3`);
//       }
//     }, `${jsonplaceholderURL}users/2`);
//   }
// }, `${jsonplaceholderURL}users/1`);

// get  : Verileri getiriyoruz.
// post : Gonderme islemi yapar. (Yeni bir eleman ekler)
// put  : id belirleriz. icini temizler. verdigimiz bilgileri(veri) girer.
// patch : id belirleriz. icini temizlemez. Eslesen veriler degisir. girdigimiz veriler yoksa ek yapar.

//PROMISE

// const getRequest = (endPoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (
//         request.readyState === XMLHttpRequest.DONE &&
//         request.status === 200
//       ) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === XMLHttpRequest.DONE) {
//         reject(`hata aldık. Hata kodu: ${request.status}`);
//       }
//     };
//     request.open("GET", endPoint);
//     request.send();
//   });
// };

// const getRequest = (endPoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject(`Hata oluştu. Hata kodu: ${request.status}`);
//       }
//     };
//     request.open("GET", endPoint);
//     request.send();
//   });
// };

// console.log(1);
// console.log(2);
// //https://jsonplaceholder.typicode.com/users/1
// getRequest(url + userURL + "/1").then((response) => {
//   console.log(response);
//   getRequest(url + userURL + "/2").then((response) => {
//     console.log(response);
//     getRequest(url + userURL + "/3").then((response) => {
//       console.log(response);
//       getRequest(url + userURL + "/4").then((response) => {
//         console.log(response);
//         getRequest(url + userURL + "/5").then((response) => {
//           console.log(response);
//         });
//       });
//     });
//   });
// });

// console.log(3);
// console.log(4);

// User Post vb nereye istek atıyorsak orada sayı kontrolü yapalım. (if else yapısı kullanıcaz.)
// Mesela 10 tane user'ımız var. 11 girince hata versin. Senin 10 tane kullanıcın var desin (lenghtine göre bakabiliriz ama daha dinamik yapı olusturmak daha güzel olur)
// Zamanınız olursa bunu while ile yapalım yani yanlış girme durumunda başa sarıp tekrar istesin.

/* --------------------- */

// let resource = 0;
// while (resource != 1 && resource != 2) {
//   resource = prompt(
//     "Lütfen sorgulamak istediğiniz sayfayı giriniz. 1- Post 2-User"
//   );
//   if (resource == 1) {
//     const takenId = prompt(
//       "Lütfen sorgulamak istediğiiniz post un id sini giriniz. 1-100 arasında olmalıdır."
//     );
//     if (takenId > 0 && takenId < 101) {
//       getRequest(callBackFunctionAysu, url + postsURL + "/" + takenId);
//     } else {
//       alert("Yanlış bir değer girdiniz...");
//     }
//   } else if (resource == 2) {
//     const takenId = prompt(
//       "Lütfen sorgulamak istediğiiniz user ın id sini giriniz. 1-10 arasında olmalıdır."
//     );
//     if (takenId > 0 && takenId < 11) {
//       getRequest(callBackFunctionAysu, url + userURL + "/" + takenId);
//     } else {
//       alert("Yanlış bir değer girdiniz...");
//     }
//   } else {
//     alert("Yanlış bir seçim yaptınız..");
//   }
// }

// function fonksiyonAysu2() {}

// const fonksiyonAysu = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number < 5) {
//       resolve(number);
//     } else {
//       reject(`Sayı 5'ten büyüktür. Sayı: ${number}`);
//     }
//   });
// };

// fonksiyonAysu(4)
//   .then((response) => {
//     console.log("Response", response);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

////////////////

// console.log("*****************************************************");
// const functionExam = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number <= 10) {
//       resolve(`İşlem başarılı. Sayınız ${number}`);
//     } else {
//       reject(`Number is greater than 10. Sayınız: ${number}`);
//     }
//   });
// };
// functionExam(19)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// FETCH YAPISI --eğer Promise yapısı kullanacaksak FETCH kullanmak şart.

// console.log(fetch(url + todosURL + "/1"));

// FETCH GET method'u

// fetch(url + todosURL + "/25")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     //yukarıdaki json'ı al data olarak yazdır.
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("HATA OLUŞTU", error);
//   });

// fetch(url + userURL + "/4")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Hata oluştu. ${error}`);
//   });

// // FETCH POST

// const newComment = {
//   postId: 3,
//   name: "Aysu Çağışlar",
//   email: "aysucagislar@gmail.com",
//   body: "Ali Güneş",
// };

// fetch(url + commentsURL + "/", {
//   method: "POST",
//   headers: { "Context-Type": "Application/json" },
//   body: JSON.stringify(newComment),
// })
//   .then((response) => {
//     console.log(response.status);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("hata", error);
//   });

// const newUser = {
//   name: "Engin Ertikmen",
//   username: "engin.ee",
//   email: "ertikmen@gmail.com",
// };

// FETCH PUT
// fetch(url + userURL + "/4", {
//   method: "PUT",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify(newUser),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Hata durumu: ${error}`);
//   });

// FETCH DELETE
// fetch(url + userURL + "/25", {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(`Silme işlemi başarılıdır.`);
//     } else {
//       console.log("hatalı");
//     }
//   })
//   .catch((error) => {
//     console.log(`Silme işlemi başarısız oldu. ${error}`);
//   });

const getTodoById = async (todoId) => {
  console.log("inner 1");
  console.log("inner 2");
  const response = await fetch(url + todosURL + "/" + todoId);
  const data = await response.json();
  console.log(data);
  console.log("inner 3");
  console.log("inner 4");
  return data;
};
console.log("outer 1");
console.log("outer 2");
getTodoById(50);
console.log("outer 3");
console.log("outer 4");
console.log("outer 5");
console.log("outer 6");

console.log("Enginnnnn");

getTodoById(75);
console.log("outer 7");
console.log("outer 8");
console.log("outer 9");
