// Storage classes
export default class Store {
  static storeGet() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static storeAdd(newBook) {
    const books = Store.storeGet();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static storeDelete(title) {
    const books = Store.storeGet();
    const index = books.findIndex((book) => book.title === title);
    if (index !== -1) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
}