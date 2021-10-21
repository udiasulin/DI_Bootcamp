let form = document.querySelector('#todoForm');
let deleteBtn = document.querySelector('#deleteBtn');
let listDiv = document.querySelector('.listTasks');
let list = document.createElement('ul');

let listTasks = [];

form.addEventListener('submit', addTask)

function addTask(e) {
    e.preventDefault()

    let todoInput = e.target.firstElementChild;

    if (todoInput.value === '') {
        alert('Missing todo')
    } else {

        listTasks.push(todoInput.value);

        let item = document.createElement('li')
        let markTodo = document.createElement('input')
        let deleteTodo = document.createElement('button')


        markTodo.setAttribute('type', 'checkbox')
        markTodo.classList.add('deleteInput')

        let itemText = document.createTextNode(todoInput.value)
        let deleteBtnText = document.createTextNode('X')

        listDiv.appendChild(list)
        list.appendChild(item)
        deleteTodo.appendChild(deleteBtnText)
        item.appendChild(deleteTodo)
        item.appendChild(markTodo)
        item.appendChild(itemText)

        deleteTodo.addEventListener('click', deleteTask)

        todoInput.value = '';
    }

}

function deleteTask(e) {
    
        e.target.parentElement.remove()

}
