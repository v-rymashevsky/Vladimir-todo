
import { deleteAllButton, deleteLastButton, toDoInput, addButton, counterAll, counterCompleted, showAllButton, showCompletedButton, searchInput } from './components.js'


export const root = document.getElementById('root');

export const header = document.createElement('header');

export const taskContainer = document.createElement('div')
taskContainer.className = 'task-container';


export const headerTop = document.createElement('div');
headerTop.className = 'header-top';

export const headerBottom = document.createElement('div');
headerBottom.className = 'header-bottom';

//.append()

root.append(header, taskContainer);
header.append(headerTop, headerBottom)
headerTop.append(deleteAllButton, deleteLastButton, toDoInput, addButton);
headerBottom.append(counterAll, counterCompleted, showAllButton, showCompletedButton, searchInput);