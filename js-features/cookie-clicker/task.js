const img = document.getElementById('cookie');
const default_width = img.width;
// const default_height = img.height;
const text = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let previous_time = Date.now();

img.onclick = function() {
    text.textContent = Number(text.textContent) + 1;
    if (img.width === default_width) {
        img.width += 20;
        // img.height += 20;
    } else {
        img.width = default_width;
        // img.height = default_height;
    };
    speed.textContent = (1000 / (Date.now() - previous_time)).toFixed(2);
    previous_time = Date.now();
};