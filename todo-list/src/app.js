import { getData } from "./utils";
import { counterAll, counterCompleted } from "./components";
import { renderTasks, refreshCounter } from "./render";






export function initApp () {
    const todos = getData('todos');
    renderTasks(todos);
    refreshCounter(counterAll, todos)
    const completedItems = todos.filter(({ isChecked }) => isChecked === true);
    refreshCounter(counterCompleted, completedItems)

}

initApp()

