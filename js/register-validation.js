const form  = document.getElementsByClassName('signup__form')[0];
const name = document.getElementById('name');
const nameError = document.querySelector('#name + p.error');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + p.error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + p.error');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + p.error');

form.addEventListener('submit', function (event) {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let users = JSON.parse(localStorage.getItem("users"));

    if (users != null){
        for(const user of users){
            if (user.name == name.value)
            {
                nameError.textContent = 'Пользователь с таким именем уже существует';
                event.preventDefault()
            }
            if (user.email == email.value)
            {
                emailError.textContent = 'Пользователь с таким email уже существует';
                event.preventDefault()
            }
        }
    } else {
        users = [];
    }

    if (password.value != confirmPassword.value) {
        confirmPasswordError.textContent = 'Пароли должны совпадать';

        event.preventDefault()
    }

    if(!email.validity.valid || !name.validity.valid || !password.validity.valid || !confirmPassword.validity.valid) {
        showError();
        event.preventDefault();
    }

    if(nameError.textContent == ''  && emailError.textContent == ''  && passwordError.textContent == ''  && confirmPasswordError.textContent == '' ) {
        users.push({
            name: name.value,
            email: email.value,
            password: password.value
        })
        localStorage.setItem("users", JSON.stringify(users));
    }
});

function showError() {

    if(name.validity.valueMissing) {
        nameError.textContent = 'Введите имя';
    }

    if(email.validity.valueMissing) {
        emailError.textContent = 'Введите email';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Введите корректный email';
    }

    if(password.validity.valueMissing) {
        passwordError.textContent = 'Введите пароль';
    } else if(password.validity.tooShort) {
        passwordError.textContent = `Длина пароля должна быть не менее ${password.minLength} символов`;
    }

    if(confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = 'Подтвердите пароль';
    }
}