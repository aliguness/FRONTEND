// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

// callbackFn=(response,error)
// const fonksiyon=()=>{};

const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const getRequest = (callBackFunction, endPoint) => {
  const request = new XMLHttpRequest();
  request.open("GET", endPoint);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);

      callBackFunction(data, null);
    } else if (request.readyState === 4) {
      callBackFunction(
        null,
        `Bu işlem hatalıdır.${request.status} Bunları hepsi Ali beyin suçu`
      );
    }
  });
  request.send();
};

const callBackFunctionAysu = (response, error) => {
  if (response) {
    console.log(response);
  } else {
    console.log(error);
  }
};

getRequest(callBackFunctionAysu, url + "/posts");

console.log("************************************************************");

const getRequest2 = (endPoint, callbackFunction) => {
  const request = new XMLHttpRequest();

  request.open("GET", endPoint);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callbackFunction(data, null);
    } else if (request.readyState === 4) {
      callbackFunction(
        null,
        `${request.status} hata kodunu aldık işlem başarısız.`
      );
    }
  };
  request.send();
};

getRequest2(url + userURL, callBackFunctionAysu);

//POST REQUEST

const postData = { name: "Ali", age: 32 };

const postRequest = (endPoint, callbackFunction, response) => {
  const request = new XMLHttpRequest();
  request.open("POST", endPoint);
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      const data = JSON.parse(request.responseText);
      callbackFunction(data, null);
    } else if (request.readyState === 4) {
      callbackFunction(null, `${request.status} hatası.. işlem başarısız...`);
    }
  };
  request.send(JSON.stringify(response));
};

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";

postRequest(url + userURL, callBackFunctionAysu, postData);

// PUT REQUEST //belirttigimiz id'li kısımdaki tum veriyi siler ve belirttigin veriyi ekler.

const postData1 = { name: "Aysu", age: "27" };

const putRequest = (endPoint, callbackFunction, data) => {
  const request = new XMLHttpRequest(); //request nesnesi urettik
  request.open("PUT", endPoint);
  request.setRequestHeader("Content-type", "Application/json");

  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null);
    } else if (request.readyState === 4) {
      callbackFunction(null, `${request.status} kodlu hata alınmıştır.`);
    }
  };
  request.send(JSON.stringify(data));
};

putRequest(url + userURL + "/2", callBackFunctionAysu, postData1);

// PATCH REQUEST  verdiğimiz verileri yama yapar.
const postData2 = { name: "Engin", age: "33" };

const patchRequest = (enpoint, callbackFunction, data) => {
  const request = new XMLHttpRequest();
  request.open("PATCH", enpoint);
  request.setRequestHeader("Content-Type", "Application/json");

  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null); //2.kısımda hata olmadığı için null yazdık.
    } else if (request.readyState === XMLHttpRequest.DONE) {
      callbackFunction(null, `${request.status} kodlu hata oluştu`);
    }
  };
  request.send(JSON.stringify(data));
};

patchRequest(`${url}${userURL}/3`, callBackFunctionAysu, postData2); // suslu yazdım ozel bir sey yok.

//patchRequest(urel + userURL + "/2", callBackFunctionAysu, postData2);
