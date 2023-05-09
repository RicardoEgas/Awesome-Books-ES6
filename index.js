/* eslint-disable max-classes-per-file */

import Store from './modules/store.js';
import Books from './modules/book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import Navigation from './modules/navigation.js';

const buttonAdd = document.querySelector('.button-add');
const displayBooks = document.getElementById('books-list');
const bookShelf = [];

// Interaction Classes

class Interaction {
  static getBooks() {
    const books = Store.storeGet();
    books.forEach((book) => displayBooks.insertAdjacentHTML('afterbegin',
      `<div class="book-item">
    <div class="book-info">
      <p>${book.title}</p> 
      <p> by ${book.author}</p> 
    </div>
    <button class="remove-btn">remove</button>
    </div>`));
  }

  static showBooks() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const newBook = new Books(title, author);

    if (!title || !author) {
      {
        const error = document.querySelector('.add-cont');
        error.insertAdjacentHTML('afterend',
          '<p class="error-message">Please, insert the title and author</p>');
      }
      return;
    }

    displayBooks.insertAdjacentHTML('afterbegin',
      `<div class="book-item">
        <div class="book-info">
          <p>${newBook.title}</p> 
          <p> by ${newBook.author}</p>
        </div>
        <button class="remove-btn">remove</button>
      </div>`);
    bookShelf.push(newBook);
    Store.storeAdd(newBook);
  }

  static remove() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.remove-btn');
      const title = target.parentElement.firstElementChild.firstElementChild.textContent;

      if (target) {
        target.parentElement.remove();
      }

      Store.storeDelete(title);
    });
  }
}

// Interaction functions

Interaction.getBooks();

// Interaction.showBooks();

buttonAdd.addEventListener('click', Interaction.showBooks);

Interaction.remove();

// Luxon date HTML injection

const date = document.querySelector('.date');
date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// Navigation Function

Navigation();

/* eslint-disable max-classes-per-file */