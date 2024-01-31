import { getData } from "./utils.js";
import { counterAll, counterCompleted } from "./components.js";
import { renderTasks, refreshCounter } from "./render.js";






export function initApp () {
    const todos = getData('todos');
    renderTasks(todos);
    refreshCounter(counterAll, todos)
    const completedItems = todos.filter(({ isChecked }) => isChecked === true);
    refreshCounter(counterCompleted, completedItems)

}

initApp()

