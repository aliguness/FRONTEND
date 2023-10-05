// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";

const getRequest = (callbackFn, endpoint) => {
  const request = new XMLHttpRequest();
  // console.log(request);
  request.open("GET", endpoint);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      // error, response
      callbackFn(null, data);
    } else if (request.readyState === 4) {
      // error                                //response
      callbackFn(`${request.status} - Couldn't fetch the data`, null);
    }
  });
  request.send();
};

getRequest((error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}, `${jsonplaceholderURL}users`);

const getRequest2 = (callbackFn, endpoint) => {
  const request = new XMLHttpRequest();
  // console.log(request);
  request.open("GET", endpoint);
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        callbackFn(null, response);
      } else {
        callbackFn("hata: " + request.status, null);
      }
    }
  };
  request.send();
};

getRequest2((error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}, `${jsonplaceholderURL}users`);

// POST Request

const postData = { name: "Cem", age: 29 };
const postRequest = (url, data, callbackFn) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        callbackFn(null, response);
      } else {
        callbackFn("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send(JSON.stringify(data));
};

postRequest(`${jsonplaceholderURL}users`, postData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// PUT Request

const putRequest = (url, data, callbackFn) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callbackFn(null, response);
      } else {
        callbackFn("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send(JSON.stringify(data));
};

const putData = { name: "Cem Mert" };
putRequest(`${jsonplaceholderURL}users/4`, putData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// PATCH Request

const patchRequest = (url, data, callbackFn) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callbackFn(null, response);
      } else {
        callbackFn("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send(JSON.stringify(data));
};

const patchData = { name: "Cem Mert Şimşek" };
patchRequest(`${jsonplaceholderURL}users/4`, patchData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// DELETE Request

const deleteRequest = (url, callbackFn) => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callbackFn(null);
      } else {
        callbackFn("Hata: " + xhr.status);
      }
    }
  };
  xhr.send();
};

deleteRequest(`${jsonplaceholderURL}users/2`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Kayıt silindi.");
  }
});
