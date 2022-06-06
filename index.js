import Books from './modules/books.js';
import handleTiming from './modules/dateTime.js';

const booksContainer = document.querySelector('.book-container');
const form = document.querySelector('form');
const list = document.querySelector('#book-list');
const addNew = document.querySelector('#add-books');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('#listbook');
const addBook = document.querySelector('#addbook');
const contacts = document.querySelector('#contacts');

bookList.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
});

addBook.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});
contacts.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});

// date
window.addEventListener('load', () => {
  handleTiming();
});

// show books on the UI

const book = new Books();
book.showBooks();

// Add book ,update UI and localStorage

form.addEventListener('submit', (e) => {
  e.preventDefault();
  book.updateBooks();
  form.reset();
});

// Remove the Book

booksContainer.addEventListener('click', (e) => {
  book.removeBook(e);
});
