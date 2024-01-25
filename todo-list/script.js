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

// counter
function createCounter(text, type, className) {
    const counter = document.createElement('div');
    counter.innerText = text;
    counter.className = className;
    counter.type = type;
    return counter
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
const createTaskCard = (id, date, task, isCompleted) => {

    const taskCard = document.createElement('template');
    taskCard.className = 'task-card';
    const cardTickButton = createButton('tick', 'button', 'card-button-tick');
    const cardDeleteButton = createButton('X', 'button', 'card-button-delete');
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    taskCard.id = id;
    cardText.innerText = task;
    const checkbox = createInput('', 'checkbox', 'card-checkbox');
    checkbox.checked = isCompleted;
    const taskDate = document.createElement('span');
    taskDate.className = 'card-date'
    taskDate.innerText = date; 
    taskCard.append(checkbox, cardDeleteButton, cardText, taskDate)
    return taskCard;
}


// components

const deleteAllButton = createButton('Delete All', 'button', 'button');
const deleteLastButton = createButton('Delete Last', 'button', 'button');
const addButton = createButton('Add', 'button', 'button');
const showAllButton = createButton('Show All', 'button', 'button');
const showCompletedButton = createButton('Show Completed', 'button', 'button');

const toDoInput = createInput('Enter todo...', 'input', 'input');
const searchInput = createInput('Search...', 'input', 'input');

const counterAll = createCounter('All: 2', 'div', 'counter')
const counterCompleted = createCounter('Completed: 1', 'div', 'counter')


const taskItem = createTaskCard('learn JS', false, 1);



//.append()

root.append(header, taskContainer);
header.append(headerTop, headerBottom)
headerTop.append(deleteAllButton, deleteLastButton, toDoInput, addButton);
headerBottom.append(counterAll, counterCompleted, showAllButton, showCompletedButton, searchInput);



// LOCAL STORAGE

// getData

const todos = getData("todos");

function getData(key) {

    const value = localStorage.getItem(key) || "[]";
    return JSON.parse(value);
}

// setData

function setData(data) {

    const dataJson = JSON.stringify(data);
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
        renderTasks();
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
    todos.push(createTask(value))
    localStorage.setItem("todos", JSON.stringify(todos));

}

// renderTasks

const renderTasks = () => {
    taskContainer.innerHTML = '';
    if (todos.length > 0) {
        todos.forEach(({ id, date, task, isCompleted }) => {
            const taskCard = createTaskCard(id, date, task, isCompleted)
            taskContainer.append(taskCard)
        })
    } else {
        const noTasksPlaceholder = document.createElement('div'); 
        noTasksPlaceholder.className = 'no-tasks-placeholder'; 
        noTasksPlaceholder.innerText = 'no tasks to display'; 
        taskContainer.append(noTasksPlaceholder);



    }
}

renderTasks();




























// input + button

// const testObject = {}

// toDoInput.addEventListener('input', function (event) {

//     testObject.description = event.target.value;
//     console.log(testObject)
// });

// addButton.addEventListener('click', () => {
//     if (testObject.description === undefined || testObject.description.toString().length === 0) {
//         alert('Add task description');
//     } else {
//         taskContainer.prepend(createTaskCard(testObject.description, false, 1));
//         testObject.description = '';
//         toDoInput.value = '';
//     }
// });

// let userInput = '';
// toDoInput.addEventListener('input', function (event) {
//     // Assuming you want to store the input in a property called 'description' in your object
//     userInput = event.target.value;
// });

// addButton.addEventListener('click', () => {
//     if (userInput === undefined || userInput.toString().length === 0) {
//         alert('Add task description');
//     } else {
//         addTask(userInput);
//         userInput = '';
//         toDoInput.value = '';
//     }
// });














// delete all
// TODO : 'nothing to delete' alert
function deleteAllHandler() {
    deleteAllButton.addEventListener('click', () => {
        if (window.confirm("Are you sure?")) {
            taskContainer.innerHTML = '';
        }
    })
}

deleteAllHandler()





