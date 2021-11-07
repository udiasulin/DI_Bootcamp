let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2')

xhr.send()

xhr.onload = () => {
    if (xhr.status !== 200) {
        console.log('Error')
            (xhr)
    } else {
        console.log('Good to go!')
        displayGifs(xhr.response)
    }
}

let displayGifs = (gifs) => {
    let gifsObj = JSON.parse(gifs);
    console.log(gifsObj['data'])
}