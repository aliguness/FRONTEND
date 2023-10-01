function getData(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const response = JSON.parse(request.responseText);
          resolve(response);
        } else if (request.readyState === 4) {
          reject("Data çekilemedi.");
        }
      });
  
      request.open("GET", url);
      request.send();
    });
  }
  
  async function callUsers() {
    const users = await getData("https://jsonplaceholder.typicode.com/users");
    console.log(users);
  }
  
  async function callPosts() {
    const posts = await getData("https://jsonplaceholder.typicode.com/posts");
    console.log(posts);
  }
  
  callPosts();
  callUsers();