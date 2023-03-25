const progress = document.querySelector('#progress');
const xhr = new XMLHttpRequest();

xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
        progress.value = event.loaded / event.total;
    } else {
        document.querySelector('.input__wrapper-desc').innerText += event.loaded;
    }
};

xhr.upload.onload = function() {
    progress.style.accentColor = 'green';
    document.querySelector('.input__wrapper-desc').innerText += '  ЗАГРУЖЕНО!';
};

document.forms.form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(document.forms.form);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});