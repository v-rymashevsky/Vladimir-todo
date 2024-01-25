const root = document.getElementById('root');

const header = document.createElement('header');

const taskContainer = document.createElement('div')
taskContainer.className = 'task-container';

root.append(header, taskContainer);

const headerTop = document.createElement('div'); 
headerTop.className = 'header-top';

const headerBottom = document.createElement('div'); 
headerBottom.className = 'header-bottom';


//button
function createButton(text, type, className) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = className;
    button.type = type;
    return button
}

//input

function createInput(text, type, className) {
    const input = document.createElement('input');
    input.placeholder = text;
    input.className = className;
    input.type = type;
    return input
}

function createCounter ( text, type, className) { 

    const counter = document.createElement('div');
    counter.innerText = text; 
    counter.className = className; 
    counter.type = type; 
    return counter
}

const deleteAllButton = createButton('Delete All', 'button', 'button');
const deleteLastButton = createButton('Delete Last', 'button', 'button'); 
const addButton = createButton('Add', 'button', 'button'); 
const showAllButton = createButton('Show All', 'button', 'button'); 
const showCompletedButton = createButton('Show Completed', 'button', 'button'); 

const toDoInput = createInput('Ented todo...', 'input', 'input');
const searchInput = createInput('Search...', 'input', 'input'); 

const counterAll = createCounter('All: 2','div','counter')
const counterCompleted = createCounter('Completed: 1','div','counter')



header.append(headerTop, headerBottom)

headerTop.append(deleteAllButton, deleteLastButton, toDoInput, addButton);
headerBottom.append(counterAll, counterCompleted, showAllButton, showCompletedButton, searchInput);



// card
const taskCard = document.createElement('div'); 
taskCard.className = 'task-card';

const cardTickButton = createButton('tick', 'button', 'card-button-tick');
const cardDeleteButton = createButton('cross', 'button', 'card-button-delete');
const cardInput = createInput('Todo text', 'input', 'card-input');

const cardDate = document.createElement('time')
cardDate.className = 'card-date';
cardDate.innerText = 'Date';

taskCard.append(cardTickButton, cardDeleteButton, cardInput, cardDate)

taskContainer.append(taskCard, taskCard)











