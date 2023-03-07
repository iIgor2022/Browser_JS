const divs = document.querySelectorAll('.reveal');

function isVisible(element) {
    const { top, bottom }  = element.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    };
    return true;
};

setInterval(() => {
    Array.from(divs).forEach(element => {
        isVisible(element) ? element.classList.add('reveal_active'):element.classList.remove('reveal_active');
    })
}, 500);