const popupWindow = document.querySelector('.modal');

const closeBtn = document.querySelector('.modal__close').addEventListener('click', () => {
    popupWindow.classList.remove('modal_active');
    document.cookie = `${encodeURIComponent('popup-window')}=${encodeURIComponent('closed')}`;
});

window.onload = () => {
    const cookie = document.cookie.split(';')[0].match(/^(.*)+\=(.*)/)
    if (cookie) {
        if (cookie[1] != 'popup-window' && cookie[2] != 'closed') {
            popupWindow.classList.add('modal_active');
        };
    } else {
        popupWindow.classList.add('modal_active');   
    };
}