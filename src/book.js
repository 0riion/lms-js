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

module.exports = Book;
