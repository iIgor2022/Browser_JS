const links_array = Array.from(document.getElementsByClassName('menu__link'));

links_array.forEach(element => {
    element.onclick = () => {return false};
    let el = element.closest('.menu__item');
    Array.from(el.querySelector('menu').querySelectorAll('.menu__item')).forEach(element => {
        element.classList.add('menu_active')
    });
});


