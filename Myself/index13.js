const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const getRequest = (callBackFunction, endPoint) => {
  const request = new XMLHttpRequest();
  request.open("GET", endPoint);
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callBackFunction(data, null);
    } else if (request.readyState === XMLHttpRequest.DONE) {
      let error = `Hata aldık. Hata kodumu: ${request.status}`;
      callBackFunction(null, error);
    }
  };
  request.send();
};

const callBackFunctionAysu = (response, error) => {
  if (response) {
    console.log("Response", response);
  } else {
    console.error(`Error`, error);
  }
};

//getRequest(callBackFunctionAysu, `${url}${userURL}`);

getRequest((error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
    getRequest((error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
        getRequest((error, response) => {
          if (error) {
            console.log(error);
          } else {
            console.log(response);
            getRequest((error, response) => {
              if (error) {
                console.log(error);
              } else {
                console.log(response);
                getRequest((error, response) => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log(response);
                  }
                }, `${jsonplaceholderURL}users/5`);
              }
            }, `${jsonplaceholderURL}users/4`);
          }
        }, `${jsonplaceholderURL}users/3`);
      }
    }, `${jsonplaceholderURL}users/2`);
  }
}, `${jsonplaceholderURL}users/1`);
