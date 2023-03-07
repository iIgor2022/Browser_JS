const divs = Array.from(document.querySelectorAll('.rotator__case'));
let interval = 1000;

function f() {
    let index = divs.findIndex(element => {
        return element.classList.contains('rotator__case_active');
    });

    if (index != -1) 
        divs[index].classList.remove('rotator__case_active');

    if (index === -1 || index + 1 === divs.length) {
        index = 0
    } else {
        index++;
    };

    divs[index].classList.add('rotator__case_active');
    divs[index].style.color = divs[index].dataset.color;
    interval = Number(divs[index].dataset.speed);
};


setInterval(f, interval);