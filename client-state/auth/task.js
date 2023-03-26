const xhr = new XMLHttpRequest();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(document.forms.signin__form);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
});

xhr.addEventListener('load', function() {
    if (this.status === 201) {
        const response = this.response;
        if (response['success']) {
            localStorage.setItem('auth', JSON.stringify({'user_id': response['user_id']}));
            document.querySelector('.signin').classList.remove('signin_active');
            document.getElementById('user_id').innerText = response['user_id'];
            document.querySelector('.welcome').classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль!');
        };
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