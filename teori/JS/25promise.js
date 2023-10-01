function addString(prev, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${prev} ${current}`);
      }, 3000);
    });
  }
  
  addString("A", "B").then((response) => {
    console.log(response);
  });