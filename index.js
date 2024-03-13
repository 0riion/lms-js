const Book = require("./src/book");
const Library = require("./src/library");

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
