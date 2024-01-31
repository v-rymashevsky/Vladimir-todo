import { setData, getData } from "./utils.js";
import { renderTasks, refreshCounter } from "./render.js";
import { counterAll, counterCompleted } from "./components.js";


export function createTask(value) {

    return {
        id: self.crypto.randomUUID(),
        date: new Date().toLocaleDateString(),
        task: value,
        isChecked: false
    }
}

export function addTask(value) {
    const todos = getData("todos");
    todos.push(createTask(value))
    setData(todos)
    renderTasks(todos);
    refreshCounter(counterAll, todos)
}

export function deleteTask(id) {
    const todos = getData("todos")
    const updatedTasks = todos.filter((element) => element.id !== id);
    const completedItems = updatedTasks.filter(({ isChecked }) => isChecked === true);
    setData(updatedTasks);
    renderTasks(updatedTasks);
    refreshCounter(counterAll, updatedTasks);
    refreshCounter(counterCompleted, completedItems)
}

export function deleteLastItem() {
    const todos = getData("todos"); 
    const index = todos.length - 1;
    const lastItemId = todos[index].id; 
    deleteTask(lastItemId);
    
}