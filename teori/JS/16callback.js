/**
 * Callback function parametresi
 * @param {string[]} books
 * @param {(books:string)=>{}} callback
 */
function getBooks(books = [], callback) {
  const bookStr = books.join(", ");
  if (callback) {
    callback(bookStr);
  }
}

const myBooks = ["Sefiller", "Genç Werther'in Acıları", "Harry Potter"];

/**
 *
 * @param {string} books
 */
const callbackFn = (books) => {
  console.log(`Benim ${books} isimli kitaplarım var.`);
};

// getBooks(myBooks, callbackFn);
getBooks(myBooks, (books) => {
  console.log(`Benim ${books} isimli kitaplarım var.`);
});
