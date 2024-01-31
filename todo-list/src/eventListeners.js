import { handleBtnAddTask, handleBtnDeleteTask, handleBtnDeleteLast, handleBtnDeleteAll, handleSearchInput, handleCheckboxes, handleBtnShowAll, handleBtnShowCompleted } from './handlers.js';
import { addButton, deleteAllButton, deleteLastButton, showAllButton, showCompletedButton, searchInput } from './components.js';
import { taskContainer } from './main.js'





addButton.addEventListener("click", handleBtnAddTask)
taskContainer.addEventListener('click', handleBtnDeleteTask)
deleteLastButton.addEventListener('click', handleBtnDeleteLast)
deleteAllButton.addEventListener('click', handleBtnDeleteAll)
searchInput.addEventListener('input', handleSearchInput);
taskContainer.addEventListener('click', handleCheckboxes)
showAllButton.addEventListener('click', handleBtnShowAll)
showCompletedButton.addEventListener('click', handleBtnShowCompleted) 
