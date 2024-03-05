// Selecting HTML elements
const input = document.querySelector('#input');
const addButton = document.querySelector('#add');
const todoList = document.querySelector('#list');

// Event listener for adding items
addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    todoList.appendChild(newItem);
    // Clear button function
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        todoList.innerHTML = '';
    });
});

// Event delegation for removing items
todoList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});