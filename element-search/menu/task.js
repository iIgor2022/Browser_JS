const links_array = Array.from(document.getElementsByClassName('menu__link'));

links_array.forEach(element => {
    element.onclick = function() {
        const menu = this.parentNode.parentNode;
        if (menu.classList.contains('menu_sub')) {
            menu.classList.remove('menu_active');
        } else {
            let f = -1;
            Array.from(menu.children).forEach((element, index) => {
                const item = element.querySelector('.menu_active')
                if (item != null) {
                    f = index;
                };
            });
            if (f === -1) {
                const el = element.closest('.menu__item');
                if (el.querySelector('.menu') != null) { 
                    el.querySelector('.menu').classList.add('menu_active');
                };
            } else {
                if (this.parentNode.querySelector('.menu_active')) {
                    this.parentNode.querySelector('.menu_active').classList.remove('menu_active');
                } else {
                    Array.from(menu.children).forEach(element => {
                        if (element.querySelector('.menu')) {
                            element.querySelector('.menu').classList.remove('menu_active');
                        };
                    });
                    this.parentNode.querySelector('.menu').classList.add('menu_active');
                }
            }
        };
        const el = element.closest('.menu__item');
        if (el.querySelector('.menu_sub') != null) {
            return false;
        };
    };
});


