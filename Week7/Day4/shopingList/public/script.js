function sendData() {
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;

    let items = {
        name,
        amount
    }
    
    fetch('http://localhost:3000/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('container').innerHTML = `${data.message}`
        })
        .catch(err => {
            console.log(err);
        })
}
function getData() {
    fetch('http://localhost:3000/list')
        .then(res => res.json())
        .then(data => {
            getList(data)
        })
}


function getList(data) {
    let container = document.getElementById('container');
    container.innerHTML = "";
    data.forEach(item => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerText = `${item.name} : ${item.amount}`;
        div.appendChild(h2)
        container.appendChild(div)
    })

}

