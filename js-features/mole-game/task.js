const dead = document.getElementById('dead');
const miss = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

function setDefault(text) {
    alert(text);
    dead.textContent = 0;
    miss.textContent = 0;
};

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);    
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            miss.textContent = Number(miss.textContent) + 1;
        };
        if (dead.textContent === '10') {
            setDefault('Победа!');
        };
        if (miss.textContent === '5') {
            setDefault('Вы проиграли!');
        };
    };
};