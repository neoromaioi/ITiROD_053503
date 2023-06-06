const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let search_query = urlParams.get('search');

for(let book of books) {
    if (book.name.toLowerCase().startsWith(search_query.toLowerCase()))
    {
        createBookItem(book.id, book.name, book.cover);
    }
}

function createBookItem(id, name, cover){
    const bookRow  = document.getElementsByClassName('books__ul')[0];
    let li = document.createElement('li');
    li.className = "top-book__item";
    let a = document.createElement('a');
    a.href = `book_page.html?id=${id}`;
    a.classList.add('link', 'top-book__item__link');
    let img = document.createElement('img');
    img.src = cover;
    img.className = "top-book__item__img";
    let div = document.createElement('div');
    div.className = "top-book__item__title";
    let span = document.createElement('span');
    span.className = "top-book__item__text";
    span.innerText = name;
    div.appendChild(span);
    a.appendChild(img);
    a.appendChild(div);
    li.appendChild(a);
    bookRow.appendChild(li);
}