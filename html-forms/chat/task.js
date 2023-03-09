const messages = document.querySelector('.chat-widget__messages');
const answers = [
    'Где ваша совесть?',
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
    "Кто тут?",
    "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать!"
];

function timer() {
    if (document.querySelector('.chat-widget_active')) {
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${String(new Date()).replace(/^.*?(\d+:\d+).*$/, `$1`)}</div>
                <div class="message__text">${answers[Math.floor(Math.random() * answers.length)]}</div>
            </div>
            `;  
    };
};

const time_timer = setInterval(timer, 30000);

document.querySelector('.chat-widget').addEventListener('click', function() {
    this.classList.add('chat-widget_active')
});

document.querySelector('.chat-widget__input').addEventListener('keydown', function(event) {
    clearInterval(time_timer);
    if (event.code === 'Enter' && this.value.trim() != "") {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${String(new Date()).replace(/^.*?(\d+:\d+).*$/, `$1`)}</div>
                <div class="message__text">${this.value}</div>
            </div>

            <div class="message">
                <div class="message__time">${String(new Date()).replace(/^.*?(\d+:\d+).*$/, `$1`)}</div>
                <div class="message__text">${answers[Math.floor(Math.random() * answers.length)]}</div>
            </div>
            `;  
        this.value = '';

        messages.lastElementChild.scrollIntoView(false);
        setInterval(timer, 30000);
    };
})