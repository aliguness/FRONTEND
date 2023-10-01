function getData(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const response = JSON.parse(request.responseText);
          // TODO: response döndürülecek.
          resolve(response);
        } else if (request.readyState === 4) {
          // TODO: hata mesajı verilecek.
          reject("Data çekilemedi.");
        }
      });
  
      request.open("GET", url);
      request.send();
    });
  }
  
  getData("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      return getData("https://jsonplaceholder.typicode.com/users");
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });