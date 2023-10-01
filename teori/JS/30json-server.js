function getData(url, init = {}) {
    return fetch(url, init)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      });
  }
  
  // * GET
  async function getPosts() {
    const posts = await getData("http://localhost:5001/posts");
    console.log(posts);
  }
  
  // getPosts();
  
  // * POST
  async function postPosts() {
    const newPost = {
      userId: 1,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    };
    const posts = await getData("http://localhost:5001/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(posts);
  }
  
  // postPosts();
  
  // * DELETE
  async function deletePost() {
    const posts = await getData("http://localhost:5001/posts/7", {
      method: "DELETE",
    });
    console.log(posts);
  }
  
  // deletePost();
  
  // * PUT
  async function postPosts() {
    const editPost = {
      userId: 1,
      title: "New Title",
      body: "New body",
    };
    const posts = await getData("http://localhost:5001/posts/6", {
      method: "PUT",
      body: JSON.stringify(editPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(posts);
  }
  
  // postPosts();
  
  // * SEARCH
  /**
   *
   * @param {string} q aratmak istenilen kelime
   * @param {string} sort objenin hangi property'sine göre sort edilmek isteniyorsa o yazılır. Mesela body gibi
   * @param {string} order asc | desc
   */
  async function searchPosts(q, sort, order) {
    const url = `http://localhost:5001/posts?q=${q}${
      sort ? `&_sort=${sort}` : ""
    }${order ? `&_order=${order}` : ""}`;
    const posts = await getData(url);
    console.log(posts);
  }
  
  searchPosts("new", "title");