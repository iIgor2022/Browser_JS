const dead = document.getElementById('dead');
const miss = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);    
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            miss.textContent = Number(miss.textContent) + 1;
        };
        if (dead.textContent === '10') {
            alert('Победа!');
            dead.textContent = 0;
            miss.textContent = 0;
        };
        if (miss.textContent === '5') {
            alert('Вы проиграли!');
            dead.textContent = 0;
            miss.textContent = 0;
        };
    };
};