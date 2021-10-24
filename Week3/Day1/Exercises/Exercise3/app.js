let container = document.querySelector('div');
let list = document.querySelector('ul');

document.body.style.fontSize = '18px';

container.style.backgroundColor = 'lightblue';
container.style.padding = '5px';

list.firstElementChild.style.display = 'none';
list.lastElementChild.style.border = '1px solid red';

if(container.style.backgroundColor === 'lightblue'){
    alert(`Hello ${list.firstElementChild.textContent} and ${list.lastElementChild.textContent}`)
}