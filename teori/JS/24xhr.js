function getData(url, callback) {
    const request = new XMLHttpRequest();
  
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // TODO: response alınacak
        const response = JSON.parse(request.responseText);
        callback("Data çekildi.", response);
      } else if (request.readyState === 4) {
        // TODO: hata mesajı verilecek.
        callback("Data çekilemedi.");
      }
    });
  
    request.open("GET", url);
    request.send();
  }
  
  getData("https://jsonplaceholder.typicode.com/posts", (message, data) => {
    console.log(message);
    if (data) {
      console.log(data);
      
      getData("https://jsonplaceholder.typicode.com/users", (message, data) => {
        console.log(message);
        if (data) {
          console.log(data);
        }
      });
    }
  });