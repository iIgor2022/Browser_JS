const textContainer = document.querySelector('#editor');

textContainer.addEventListener('change', function() {
    localStorage.setItem('text-editor', textContainer.value);
});

window.onload = () => {
    textContainer.value = localStorage.getItem('text-editor');
};

document.querySelector('button').addEventListener('click', () => {
    textContainer.value = '';
    localStorage.removeItem('text-editor');
})