(function () {
    
    let xhr = new XMLHttpRequest();

    let url = 'https://api.giphy.com/v1/gifs/search?q=&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10';

    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10')
    xhr.send()

    xhr.onload = () => {
        if (xhr.status !== 200) {
            console.log('Error')
                (xhr)
        } else {
            displayGifs(xhr.response)
            searchResponse(url)
        }
    }

    let searchResponse = () => {
        let searchInput = document.querySelector('#searchBox')
        searchInput.addEventListener('input', function (e) {
            xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
            xhr.send()
        })
    }
    
})()



let displayGifs = (gifs) => {
    let gifsObj = JSON.parse(gifs);
    let container = document.querySelector('.container');
    let deleteAll = document.querySelector('.deleteAll');
    deleteAll.addEventListener('click', function () {
        container.innerHTML = ''
    })
    for (gif of gifsObj['data']) {
        let imgUrl = gif['images']['preview_webp']['url'];
        let img = document.createElement('img')
        let deleteBtn = document.createElement('button')
        let gifDiv = document.createElement('div');
        deleteBtn.addEventListener('click', deleteFunc)
        deleteBtn.innerText = 'Delete';
        img.setAttribute('src', imgUrl)
        container.appendChild(gifDiv)
        gifDiv.appendChild(img)
        gifDiv.appendChild(deleteBtn)
    }
}
let deleteFunc = (e) => {
    e.target.parentNode.remove()
}