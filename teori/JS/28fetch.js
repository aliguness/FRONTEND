function getData(url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }
  
  async function callUsers() {
    const users = await getData("https://jsonplaceholder.typicode.com/users");
    console.log(users);
  }
  
  getData("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log(response);
  });
  
  callUsers();