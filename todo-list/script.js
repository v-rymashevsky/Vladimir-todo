const root = document.getElementById('root');

const header = document.createElement('header');

const taskContainer = document.createElement('div')
taskContainer.className = 'task-container';


const headerTop = document.createElement('div');
headerTop.className = 'header-top';

const headerBottom = document.createElement('div');
headerBottom.className = 'header-bottom';





// component functions


// button
function createButton(text, type, className) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = className;
    button.type = type;
    return button
}

// input
function createInput(text, type, className) {
    const input = document.createElement('input');
    input.placeholder = text;
    input.className = className;
    input.type = type;
    return input
}

// create counter
function createCounter(text, type, className) {
    const counter = document.createElement('div');
    counter.textContent = text;
    counter.className = className;
    counter.type = type;
    return counter;
}

//refresh counter
refreshCounter = (type, arr) => {
    if (type === counterAll) {
    type.textContent = `All: ${arr.length}`
    } else {
        type.textContent = `Completed: ${arr.length}`
    }
}


// date 

function displayDate() {

    const currentDate = document.createElement('span');
    currentDate.className = 'card-date'
    let date = Date().toString().split(" ");
    currentDate.innerText = date[1] + ' ' + date[2] + ' ' + date[3] + ' ' + date[4].slice(0, 5);
    return currentDate
}

// card
const createTaskCard = (id, date, task, isChecked) => {

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    const cardTickButton = createButton('tick', 'button', 'card-button-tick');
    const cardDeleteButton = createButton('X', 'button', 'card-button-delete');
    const cardText = document.createElement('span');
    cardText.classList.add('card-text');
    taskCard.id = id;
    cardText.innerText = task;
    const checkbox = createInput('', 'checkbox', 'card-checkbox');
    checkbox.checked = isChecked;
    const taskDate = document.createElement('span');
    taskDate.className = 'card-date'
    taskDate.innerText = date;
    taskCard.append(checkbox, cardDeleteButton, cardText, taskDate)
    return taskCard;
}

// 'no tasks' block

renderNoTasksBlock = () => {
    taskContainer.innerHTML = '';
    const noTasksPlaceholder = document.createElement('div');
    noTasksPlaceholder.className = 'no-tasks-placeholder';
    noTasksPlaceholder.innerText = 'no tasks to display';
    taskContainer.append(noTasksPlaceholder);
}


// components

const deleteAllButton = createButton('Delete All', 'button', 'button');
const deleteLastButton = createButton('Delete Last', 'button', 'button');
const addButton = createButton('Add', 'button', 'button');
const showAllButton = createButton('Show All', 'button', 'button');
const showCompletedButton = createButton('Show Completed', 'button', 'button');

const toDoInput = createInput('Enter todo...', 'input', 'input');
const searchInput = createInput('Search...', 'input', 'input');

const counterAll = createCounter('All: 0', 'div', 'counter')
const counterCompleted = createCounter('Completed: 0', 'div', 'counter')


//.append()

root.append(header, taskContainer);
header.append(headerTop, headerBottom)
headerTop.append(deleteAllButton, deleteLastButton, toDoInput, addButton);
headerBottom.append(counterAll, counterCompleted, showAllButton, showCompletedButton, searchInput);



// LOCAL STORAGE

// getData


function getData(key) {

    const value = localStorage.getItem(key) || "[]";
    return JSON.parse(value);
}

// setData

function setData(arr) {

    const dataJson = JSON.stringify(arr);
    localStorage.setItem("todos", dataJson);

}

// ADDING TASKS


// listener

addButton.addEventListener("click", () => {
    const userInput = toDoInput.value;

    if (userInput === undefined || userInput.toString().length === 0) {
        alert('Add task description');
    } else {
        addTask(userInput);
        toDoInput.value = "";

    }
})

// createTask
function createTask(value) {

    return {
        id: self.crypto.randomUUID(),
        date: new Date().toLocaleDateString(),
        task: value,
        isChecked: false
    }
}

// addTask
function addTask(value) {
    const todos = getData("todos");
    todos.push(createTask(value))
    setData(todos)
    renderTasks(todos);
    refreshCounter(counterAll, todos)
}

function testInit () {
    const todos = getData('todos');
    renderTasks(todos);
    refreshCounter(counterAll, todos)
    const completedItems = todos.filter(({ isChecked }) => isChecked === true);
    refreshCounter(counterCompleted, completedItems)

}


// renderTasks

const renderTasks = (arr) => {
    taskContainer.innerHTML = '';
    if (arr.length > 0) {
        arr.forEach(({ id, date, task, isChecked }) => {
            const taskCard = createTaskCard(id, date, task, isChecked)
            taskContainer.append(taskCard);

        })
    } else {
        renderNoTasksBlock();
    }
}





testInit()


// DELETE A TASK

// listener 
taskContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('card-button-delete')) {
        const taskId = event.target.closest('div').id;
        if (window.confirm('are you sure?')) {
            deleteTask(taskId);
        }

    }
})

function deleteTask(id) {
    const todos = getData("todos")
    const updatedTasks = todos.filter((element) => element.id !== id);
    const completedItems = updatedTasks.filter(({ isChecked }) => isChecked === true);
    setData(updatedTasks);
    renderTasks(updatedTasks);
    refreshCounter(counterAll, updatedTasks);
    refreshCounter(counterCompleted, completedItems)
}

// DELETE LAST

// listener

deleteLastButton.addEventListener('click', () => {
    deleteLastItem()
})

// function

function deleteLastItem() {
    const todos = getData("todos"); 
    if (todos.length > 0) { 
    const index = todos.length - 1;
    const lastItemId = todos[index].id; 
    deleteTask(lastItemId);
    } else { 
        alert('nothing to delete')
    }
}

// DELETE ALL TASKS

function deleteAllHandler() {
    deleteAllButton.addEventListener('click', () => {
        const todos = getData("todos")
        if (todos.length === 0) {
            alert('Nothing to delete');
        } else {
            if (window.confirm("Are you sure?")) {
                todos.length = 0;
                setData(todos)
                renderTasks(todos);
                refreshCounter(counterAll, todos);
                refreshCounter(counterCompleted, todos);
            }
        }
    });
}

deleteAllHandler()

// SEARCHING

searchInput.addEventListener('input', function (event) {
    const todos = getData("todos");
    const searchItems = todos.filter(({ task }) => task.startsWith(event.target.value));
    
    if (searchItems.length > 0) {
        renderTasks(searchItems);
    } else {
        renderNoTasksBlock();
    }
});

// (UN)CHECKING

taskContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('card-checkbox')) {
        const todos = getData('todos'); 
        const taskId = event.target.closest('div').id;
        const item = todos.find(({id}) => id === taskId);
        item.isChecked = !item.isChecked;
        setData(todos)
        const completedItems = todos.filter(({ isChecked }) => isChecked === true);
        refreshCounter(counterCompleted, completedItems);

    }
})

//SHOWING ALL

showAllButton.addEventListener('click', () => { 
    const todos = getData("todos");
    renderTasks(todos)
}) 

// SHOWING COMPLETED
showCompletedButton.addEventListener('click', () => { 
    const todos = getData("todos");
    const completedItems = todos.filter(({ isChecked }) => isChecked === true);
    if (completedItems.length > 0) {
        renderTasks(completedItems);
    } else {
        renderNoTasksBlock();
    }
}); 


// COUNTER UPDATES at searchItems, showCompleted -- fixed?? 