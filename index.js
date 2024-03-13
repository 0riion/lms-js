//The exercise simulates a library management system, allowing you to add books, search for books by author, and display the list of books in the library.

class Book {
  constructor(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
  }

  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.numPages}`;
  }
}

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

function main() {
  var mainLibrary = new Library();

  mainLibrary.addBook(
    new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 432)
  );
  mainLibrary.addBook(
    new Book("The Little Prince", "Antoine de Saint-Exupéry", 96)
  );
  mainLibrary.addBook(new Book("1984", "George Orwell", 328));
  mainLibrary.addBook(new Book("Don Quixote", "Miguel de Cervantes", 863));

  mainLibrary.displayBooks();

  var author = "Gabriel García Márquez";
  var booksByAuthorFound = mainLibrary.searchBooksByAuthor(author);
  console.log("Books written by " + author + ":");
  for (var i = 0; i < booksByAuthorFound.length; i++) {
    console.log(booksByAuthorFound[i].getInfo());
  }
}

main();
