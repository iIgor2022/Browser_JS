const tasksInput = document.querySelector('.tasks__input');

function elementCreate(text) {
    const div = document.createElement('div');
    div.classList.add('task');
    // const divTitle = document.createElement('div');
    // divTitle.classList.add('task__title');
    // divTitle.innerText = text;
    div.innerHTML = `
        <div class="task__title">
            ${text}
        </div>        
    `;

    // Мне кажется, здесь проще вручную создать тэг <а> и сразу повесить
    // на него обработчик, чем через innerHTML, а затем искать его через querySelector
    
    const href = document.createElement('a');
    href.classList.add('task__remove');
    href.setAttribute('href', '#');
    href.innerHTML = '\u00D7';
    div.appendChild(href);
    document.querySelector('.tasks__list').appendChild(div);
    href.onclick = function() {
        let tasksList = JSON.parse(localStorage.getItem('tasks'));
        tasksList = tasksList.slice(tasksList.indexOf(this.previousElementSibling.innerText) + 1);
        localStorage.setItem('tasks', JSON.stringify(tasksList));
        this.parentElement.remove();
        return false;
    };
};

function addTask(taskText) {
    let tasksList = localStorage.getItem('tasks');
    if (tasksList) {
        tasksList = JSON.parse(tasksList);
        if (!tasksList.includes(taskText)) {
            tasksList.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasksList));
            elementCreate(taskText);
        }
    } else {
        localStorage.setItem('tasks', JSON.stringify([taskText]));
        elementCreate(taskText);
    };
};

document.forms.tasks__form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (tasksInput.value != '') {
        addTask(tasksInput.value);
        tasksInput.value = '';
    };
});

window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
            elementCreate(tasks[i]);
        };
    };
};