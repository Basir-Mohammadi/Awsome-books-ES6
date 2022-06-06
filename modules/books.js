const booksContainer = document.querySelector('.book-container');
const form = document.querySelector('form');
class Books {
  constructor() {
    this.by = null;
    this.books = [
      {
        title: 'Book 1',
        author: 'Ahmad',
      },
      {
        title: 'Book 2',
        author: 'john',
      },
    ];
  }

  generateBook(book) {
    this.by = 'by';
    return `<div>
        <ul>
          <li>"${book.title}"</li>
          <li>${this.by}</li>
          <li>${book.author}</li> 
        </ul>
      <button>Delete</button>
      </div>
      `;
  }

  showBooks() {
    const booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
    if (booksFromLocalStorage) {
      this.books = booksFromLocalStorage;
      booksContainer.innerHTML = booksFromLocalStorage
        .map((book) => this.generateBook(book))
        .join('');
    } else {
      localStorage.setItem('books', JSON.stringify(this.books));
      booksContainer.innerHTML = this.books.map((book) => this.generateBook(book)).join('');
    }
  }

  updateBooks() {
    const title = form.title.value.trim();
    const author = form.author.value.trim();
    if (title && author) {
      this.books.push({ title, author });
    }
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook(e) {
    if (e.target.tagName === 'BUTTON') {
      const title = e.target.parentElement.firstElementChild.firstElementChild.textContent;
      this.books = this.books.filter((obj) => obj.title !== title.slice(1, title.length - 1));
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    }
  }
}

export default Books;