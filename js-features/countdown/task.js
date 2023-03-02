let now = new Date(0, 0, 0, 0, 0, 0, 0);
const timer = document.getElementById('timer');

now.setSeconds(Number(timer.textContent));
console.log(now.getSeconds());
let interval = setInterval(() => {
    now.setSeconds(now.getSeconds() - 1);
    timer.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    if ((now.getHours() === 0) && (now.getMinutes() === 0) && (now.getSeconds() === 0)) {
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    };
}, 1000);