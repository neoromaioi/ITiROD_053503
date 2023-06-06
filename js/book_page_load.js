const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

for(let book of books) {
        if (book.id === Number(id)) {
            createBookPage(book);
        }
}

function createBookPage(book) {
    let cover = document.getElementById('bookCover');
    cover.src = book.cover;

    let publishingHouse = document.getElementById('publishingHouse');
    publishingHouse.textContent = book.publishingHouse;

    let size = document.getElementById('size');
    size.textContent = book.size;

    let pages = document.getElementById('pages');
    pages.textContent = book.pages;

    let isbn = document.getElementById('isbn');
    isbn.textContent = book.isbn;

    let bookTitle = document.getElementById('bookTitle');
    bookTitle.textContent = book.name;

    let bookAuthor = document.getElementById('bookAuthor');
    for(let author of book.authors) {
        bookAuthor.textContent = bookAuthor.textContent + author + ', ';
    }

    let bookYear = document.getElementById('bookYear');
    bookYear.textContent = book.year;

    let bookDescription = document.getElementById('bookDescription');
    bookDescription.textContent = book.description;
}
