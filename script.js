
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.querySelector('form');
const message = document.getElementById('error-message');

function comparePasswords(password1, password2) {
    return password1 === password2;
}

form.addEventListener('submit', (e) => {
    if (!comparePasswords(password1.value, password2.value)){
        message.style.display = 'block';
        password1.classList.add('invalid');
        password2.classList.add('invalid');
        e.preventDefault();      
    }
});
