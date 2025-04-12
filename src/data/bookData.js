let books = [];

// Add function here

function addBook(book) {
  const newBook = { id: books.length + 1, ...book };
  books.push(newBook);
  return newBook;
}

function getBooks() {
  return books;
}

function resetBooks() {
  books = [];
}

module.exports = { resetBooks, getBooks, addBook };
