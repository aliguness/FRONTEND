const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";

// const getRequest = (callbackFn, endpoint) => {
//     const request = new XMLHttpRequest()
//     // console.log(request);
//     request.open("GET", endpoint)
//     request.addEventListener("readystatechange", () => {
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//                     // error, response
//             callbackFn(null, data)
//         } else if (request.readyState === 4){
//                           // error                                //response
//             callbackFn(`${request.status} - Couldn't fetch the data`, null)
//         }
//     })
//     request.send()
// }

// CALLBACK HELL

// getRequest((error, response)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//         getRequest((error, response)=>{
//             if(error){
//                 console.log(error);
//             } else {
//                 console.log(response);
//                 getRequest((error, response)=>{
//                     if(error){
//                         console.log(error);
//                     } else {
//                         console.log(response);
//                         getRequest((error, response)=>{
//                             if(error){
//                                 console.log(error);
//                             } else {
//                                 console.log(response);
//                                 getRequest((error, response)=>{
//                                     if(error){
//                                         console.log(error);
//                                     } else {
//                                         console.log(response);
//                                     }
//                                 } , `${jsonplaceholderURL}users/5`)
//                             }
//                         } , `${jsonplaceholderURL}users/4`)
//                     }
//                 } , `${jsonplaceholderURL}users/3`)
//             }
//         } , `${jsonplaceholderURL}users/2`)
//     }
// } , `${jsonplaceholderURL}users/1`)

//PROMISE

const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(`${request.status} - Could not fetch the data`);
      }
    });
    request.open("GET", endpoint);
    request.send();
  });
};

// console.log(1);
// console.log(2);
// getRequest(`${jsonplaceholderURL}users/1`)
//     .then((res) => {
//     console.log(res);
// getRequest(`${jsonplaceholderURL}users/2`)
//     .then((res) => {
//     console.log(res);
// getRequest(`${jsonplaceholderURL}users/3`)
//     .then((res) => {
//     console.log(res);
// getRequest(`${jsonplaceholderURL}users/4`)
//     .then((res) => {
//     console.log(res);
// getRequest(`${jsonplaceholderURL}users/5`)
//     .then((res) => {
//     console.log(res);
//         });
//       });
//     });
//   });
// });
// console.log(3);
// console.log(4);

// FETCH

// console.log(fetch(`${jsonplaceholderURL}todos/1`)) fetch bir promise nesnesi döner

// fetch get request
// fetch(`${jsonplaceholderURL}todos/1`)
// .then((res) => {
//     console.log(res); // response nesnesi döner.
//     return res.json(); // res.json() ile response'u js nesnesine çevirdik
// })
// .then((data) => console.log(data));

// fetch post request

// const newComment = {
//   postId: 3,
//   name: "Lorem Ipsum",
//   email: "cem@example.com",
//   body: "Lorem ipsum dolor sit amet non elit",
// };

// fetch(`${jsonplaceholderURL}comments/`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(newComment),
// })
//   .then((res) => {
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => console.log(data));

// ASYNC/AWAIT

const getTodoById = async (todoId) => {
  console.log("inner 1");
  console.log("inner 2");
  const response = await fetch(`${jsonplaceholderURL}todos/${todoId}`);
  const data = await response.json();
  console.log(data);
  console.log("inner 3");
  console.log("inner 4");
  return data;
};

console.log("outer 1");
console.log("outer 2");
getTodoById(5);
console.log("outer 3");
console.log("outer 4");
