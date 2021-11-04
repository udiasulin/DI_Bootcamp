let renderdResult = () => {
    let container = document.querySelector('.container')
    let h1 = document.createElement('h1')
    let height = document.createElement('p')
    let gender = document.createElement('p')
    let birthYear = document.createElement('p')
    let homeWorld = document.createElement('p')

    container.appendChild(h1)
    container.appendChild(height)
    container.appendChild(gender)
    container.appendChild(birthYear)
    container.appendChild(homeWorld)
}

let requestData = ()  => async { }