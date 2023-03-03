document.getElementsByClassName('dropdown__value')[0].addEventListener('click', function() {
    if (document.getElementsByClassName('dropdown__list_active').length === 0) {
        document.getElementsByClassName('dropdown__list')[0].classList.add('dropdown__list_active');
    } else {
        document.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active');
    }

});

Array.from(document.getElementsByClassName('dropdown__item'))
    .forEach(element => {
        element.addEventListener('click', function() {
            document.getElementsByClassName('dropdown__value')[0].textContent
             = this.querySelector('.dropdown__link').textContent;
            document.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active');
        })
    });

Array.from(document.getElementsByClassName('dropdown__link'))
    .forEach(element => {
        element.onclick = () => {return false}
    });