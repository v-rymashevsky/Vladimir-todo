import { createButton, createInput } from "./components.js";



export const createTaskCard = (id, date, task, isChecked) => {

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