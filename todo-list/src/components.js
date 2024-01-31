// button
export function createButton(text, type, className) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = className;
    button.type = type;
    return button
}

// input
export function createInput(text, type, className) {
    const input = document.createElement('input');
    input.placeholder = text;
    input.className = className;
    input.type = type;
    return input
}

// create counter
export function createCounter(text, type, className) {
    const counter = document.createElement('div');
    counter.textContent = text;
    counter.className = className;
    counter.type = type;
    return counter;
}


export const deleteAllButton = createButton('Delete All', 'button', 'button');
export const deleteLastButton = createButton('Delete Last', 'button', 'button');
export const addButton = createButton('Add', 'button', 'button');
export const showAllButton = createButton('Show All', 'button', 'button');
export const showCompletedButton = createButton('Show Completed', 'button', 'button');
export const toDoInput = createInput('Enter todo...', 'input', 'input');
export const searchInput = createInput('Search...', 'input', 'input');
export const counterAll = createCounter('All: 0', 'div', 'counter')
export const counterCompleted = createCounter('Completed: 0', 'div', 'counter')