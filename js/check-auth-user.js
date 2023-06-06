let auth_user = JSON.parse(sessionStorage.getItem("auth_user"));

if (auth_user){
    let login = document.getElementsByClassName('signin__btn')[0];
    let menu = document.getElementsByClassName('dropdown-content')[0];

    login.style.display = 'none';
    let dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.style.display = 'block';
    let name = document.createElement('p');
    name.textContent = 'Name: ' + auth_user.name;

    /*let creationBook = document.createElement('a');
    creationBook.href = 'book_creation_page.html';
    creationBook.textContent = 'Добавить книгу';*/
    //creationBook.addEventListener('click', createBook);

    let navLink = document.createElement('a');
    navLink.href = ``;
    navLink.textContent = 'Выйти';
    navLink.addEventListener('click', Logout);

    menu.appendChild(name);
    //menu.appendChild(creationBook);
    menu.appendChild(navLink);
}

function Logout(){
    sessionStorage.clear();
}

function createBook(){

}

