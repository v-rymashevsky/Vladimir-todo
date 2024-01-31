import { toDoInput } from "./components";
import { addTask, deleteTask, deleteLastItem } from "./taskOperations";
import { getData, setData } from "./utils";
import { renderTasks, refreshCounter, renderNoTasksBlock } from "./render";
import { counterAll, counterCompleted } from "./components";



export function handleBtnAddTask() { 
    const userInput = toDoInput.value;

    if (userInput === undefined || userInput.toString().length === 0) {
        alert('Add task description');
    } else {
        addTask(userInput);
        toDoInput.value = "";
    }
}

export function handleBtnDeleteTask(event) { 
    if (event.target.classList.contains('card-button-delete')) {
        const taskId = event.target.closest('div').id;
        if (window.confirm('are you sure?')) {
            deleteTask(taskId);
        }

    }
}

export function handleBtnDeleteLast() { 
    const todos = getData("todos"); 
    if (todos.length === 0) { 
        alert('Nothing to delete');
    } else if (window.confirm('Are you sure?')) {
        deleteLastItem();
    }
}

export function handleBtnDeleteAll() { 

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
}

export function handleSearchInput(event) {
    const todos = getData("todos");
    const searchItems = todos.filter(({ task }) => task.startsWith(event.target.value));
    
    if (searchItems.length > 0) {
        renderTasks(searchItems);
    } else {
        renderNoTasksBlock();
    }
}

export function handleCheckboxes(event) {
    if (event.target.classList.contains('card-checkbox')) {
        const todos = getData('todos'); 
        const taskId = event.target.closest('div').id;
        const item = todos.find(({id}) => id === taskId);
        item.isChecked = !item.isChecked;
        setData(todos)
        const completedItems = todos.filter(({ isChecked }) => isChecked === true);
        refreshCounter(counterCompleted, completedItems);

    }
}

export function handleBtnShowAll () {
    const todos = getData("todos");
    renderTasks(todos);
}

export function handleBtnShowCompleted () { 
    const todos = getData("todos");
    const completedItems = todos.filter(({ isChecked }) => isChecked === true);
    if (completedItems.length > 0) {
        renderTasks(completedItems);
    } else {
        renderNoTasksBlock();
    }
}