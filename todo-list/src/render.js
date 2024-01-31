import { taskContainer } from './main.js'
import { createTaskCard } from './taskCard.js'




export const refreshCounter = (type, arr) => {
    if (type === counterAll) {
    type.textContent = `All: ${arr.length}`
    } else {
        type.textContent = `Completed: ${arr.length}`
    }
}

// 'no tasks' block

export const renderNoTasksBlock = () => {
    taskContainer.innerHTML = '';
    const noTasksPlaceholder = document.createElement('div');
    noTasksPlaceholder.className = 'no-tasks-placeholder';
    noTasksPlaceholder.innerText = 'no tasks to display';
    taskContainer.append(noTasksPlaceholder);
}

// renderTasks

 export const renderTasks = (arr) => {
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