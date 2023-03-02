const links_array = Array.from(document.getElementsByClassName('menu__link'));

links_array.forEach(element => {
    element.onclick = () => {
        const el = element.closest('.menu__item');
        if (el.querySelector('.menu') != null) { 
            el.querySelector('.menu').classList.add('menu_active');
        };
        if (el.closest('.menu_sub') == null) {
            return false;
        };
    };
});


