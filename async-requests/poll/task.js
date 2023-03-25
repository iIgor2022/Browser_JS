const xhr = new XMLHttpRequest();
let recievedData = {};

function btnAddEventListener() {
    const btnAnswer = Array.from(document.querySelectorAll('.poll__answer'));
    btnAnswer.forEach(element => {
        element.addEventListener('click', function() {
            alert('Спасибо, Ваш голос засчитан!');
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.responseType = 'json';
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(`vote=${recievedData['id']}&answer=${this.dataset.id}`);
        })
    });
};

xhr.addEventListener('load', function() {
    recievedData = this.response;
    if (recievedData['data']) {
        document.querySelector('.poll__title').innerHTML = recievedData['data']['title'];
        for (let index = 0; index < recievedData['data']['answers'].length; index++) {
            const btn = document.createElement('button');
            btn.classList.add('poll__answer');
            btn.innerText = recievedData['data']['answers'][index];
            btn.dataset.id = index;
            document.querySelector('.poll__answers').appendChild(btn);
        };
        btnAddEventListener();
    };
    if (recievedData['stat']) {
        const answers = document.querySelector('.poll__answers');
        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        };

        const totalAnswers = recievedData['stat'].reduce(function(accumulator, currentValue) {
            return accumulator['votes'] + currentValue['votes']
        });

        for (let item of recievedData['stat']) {
            const p = document.createElement('p');
            p.innerText = `${item['answer']}: ${((item['votes'] / totalAnswers) * 100).toFixed(2)}%`;
            answers.appendChild(p);
        };
    };
});

window.onload = () => {
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.responseType ='json';

    xhr.send();
};