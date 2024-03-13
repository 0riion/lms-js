class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  displayBooks() {
    console.log("List of books in the library:");
    this.books.forEach((book) => console.log(book.getInfo()));
  }
}

module.exports = Library;
