const form  = document.getElementsByClassName('signin__form')[0];
const name = document.getElementById('name');
const nameError = document.querySelector('#name + p.error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + p.error');

form.addEventListener('submit', function (event) {
    nameError.textContent = '';
    passwordError.textContent = '';
    let users = JSON.parse(localStorage.getItem("users"));
    let auth_user;
    if (users != null){
        for(const user of users){
            if (name.value == user.name && password.value == user.password)
            {
                auth_user = user;
            }
        }
    }

    if(!name.validity.valid || !password.validity.valid) {
        showError();
        event.preventDefault();
    } else if(!auth_user){
        passwordError.textContent = 'Имя пользователя или пароль введены неверно';
        event.preventDefault()
    } else {
        sessionStorage.setItem("auth_user", JSON.stringify(auth_user));
    }
});

function showError() {

    if(name.validity.valueMissing) {
        nameError.textContent = 'Введите имя пользователя';
    }

    if(password.validity.valueMissing) {
        passwordError.textContent = 'Введите пароль';
    }
}