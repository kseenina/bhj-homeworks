const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
let storedTasks = loadTasks();

function createTask(text) {
    const task = document.createElement('div');
    task.classList.add('task');
    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = text;
    const taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.innerHTML = '&times;';
    taskRemove.addEventListener('click', (event) => {
        event.preventDefault();
        task.remove();
        const filtered = storedTasks.filter(t => t !== text);
        storedTasks = filtered;
        saveTasks(storedTasks);
    });
    task.append(title, taskRemove);
    tasksList.append(task);
}

function loadTasks() {
    const raw = localStorage.getItem('tasks');
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveTasks(storedTasks) {
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return; 
    createTask(text);
    storedTasks.push(text);
    saveTasks(storedTasks);
    input.value = '';
});

storedTasks.forEach(text => {
    createTask(text);
});