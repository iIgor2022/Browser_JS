const popups_array = Array.from(document.getElementsByClassName('modal'));
const close_btn = document.getElementsByClassName('modal__close');

document.getElementById('modal_main').classList.add('modal_active');

for (let i = 0; i < close_btn.length; i++) {
    close_btn[i].onclick = () => {
        popups_array.forEach(element => element.classList.remove('modal_active'));
        // popups.classList.remove('modal_active');
    };
};


const btn = document.getElementsByClassName('show-success');

btn[0].onclick = () => {
    document.getElementById('modal_success').classList.add('modal_active');
}