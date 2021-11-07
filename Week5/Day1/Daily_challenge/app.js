let form = document.querySelector('form');
let container = document.querySelector('div');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());

    let p = document.createElement('p')
    p.innerText = JSON.stringify(value);

    container.appendChild(p)

})

