const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

//put method'u

const newComment = {
  postId: "1",
  name: "Ali",
  email: "ali@gmail.com",
  age: "32",
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
    console.log("data: ", data);
  })
  .catch((error) => {
    console.log("Hata alındı:", error);
  });

const getCommentByIdAsync = async () => {
  try {
    const response = await fetch(url + commentsURL + "/4");
    const data = response.json();
    console.log("comment", data);
  } catch (error) {
    console.log("Hata alındı: ", error);
  }
};
getCommentByIdAsync();
