const links_array = Array.from(document.getElementsByClassName('menu__link'));

links_array.forEach(element => {
    element.onclick = function() {
        const menu = this.parentNode.parentNode;
        if (menu.classList.contains('menu_sub')) {
            menu.classList.remove('menu_active');
        } else {
            Array.from(menu.children).forEach(element => {
                const item = element.querySelector('.menu_active')
                if (item != null) {
                    item.classList.remove('menu_active');
                };
            });
        };
        const el = element.closest('.menu__item');
        if (el.querySelector('.menu') != null) { 
            el.querySelector('.menu').classList.add('menu_active');
        };
        if (el.querySelector('.menu_sub') != null) {
            return false;
        };
    };
});


