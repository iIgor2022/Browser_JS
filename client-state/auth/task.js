const xhr = new XMLHttpRequest();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(document.forms.signin__form);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
});

function showWelcome(user_id) {
    document.querySelector('.signin').classList.remove('signin_active');
    document.getElementById('user_id').innerText = user_id;
    document.querySelector('.welcome').classList.add('welcome_active');
};

xhr.addEventListener('load', function() {
    const response = this.response;
    if (response['success']) {
        localStorage.setItem('auth', JSON.stringify({'user_id': response['user_id']}));
        showWelcome(response['user_id']);
    } else {
        alert('Неверный логин/пароль!');
    };
});

xhr.addEventListener('loadstart', () => {
    document.querySelector('input[name=login]').value = '';
    document.querySelector('input[name=password]').value = '';
});

document.getElementById('logout__btn').addEventListener('click', () => {
    localStorage.removeItem('auth');
    document.querySelector('.welcome').classList.remove('welcome_active');
    document.querySelector('.signin').classList.add('signin_active');
    document.getElementById('user_id').innerText = '';
});

window.onload = () => {
    if (localStorage.getItem('auth')) {
        try {
            showWelcome(JSON.parse(localStorage.getItem('auth'))['user_id']);
        } catch (error) {
            return false;    
        };
    }
}