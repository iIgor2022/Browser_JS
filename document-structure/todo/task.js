const btn = document.querySelector('.tasks__add');
const tasks_input = document.querySelector('.tasks__input');

function addTask(task_text) {
    const div = document.createElement('div');
    div.classList.add('task');
    const div_title = document.createElement('div');
    div_title.classList.add('task__title');
    div_title.innerText = task_text;
    const href = document.createElement('a');
    href.classList.add('task__remove');
    href.setAttribute('href', '#');
    href.innerHTML = '\u00D7';
    div.appendChild(div_title);
    div.appendChild(href);
    document.querySelector('.tasks__list').appendChild(div);
    href.onclick = function() {
        localStorage.removeItem(this.previousElementSibling.innerText);
        this.parentElement.remove();
        return false;
    };

    localStorage.setItem(div_title.innerText, '0');
};

btn.addEventListener('click', function() {
    if (tasks_input.value != "") {
        addTask(tasks_input.value);
    };
});

window.onload = () => {
    for (let i = 0; i < localStorage.length; i++) {
        addTask(localStorage.key(i));
    };
};