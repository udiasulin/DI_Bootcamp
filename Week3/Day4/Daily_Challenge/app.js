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


        markTodo.setAttribute('type', 'checkbox')
        markTodo.classList.add('deleteInput')

        let itemText = document.createTextNode(todoInput.value)

        listDiv.appendChild(list)
        item.appendChild(itemText)
        list.appendChild(item)
        item.appendChild(markTodo)
        markTodo.addEventListener('change', deleteTask)

        todoInput.value = '';
    }

}

function deleteTask(e) {
    if (e.target) {
        e.target.parentElement.remove()
    }
}
