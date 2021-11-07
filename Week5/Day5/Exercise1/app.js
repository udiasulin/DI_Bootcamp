let container = document.querySelector('.container')

let renderdResult = (info, homeData) => {


    container.innerHTML = '';

    let h1 = document.createElement('h1')
    let height = document.createElement('p')
    let gender = document.createElement('p')
    let birthYear = document.createElement('p')
    let homeWorld = document.createElement('p')

    h1.textContent = info['name'];
    height.textContent = `Height: ${info['height']}`;
    gender.textContent = `gender: ${info['gender']} `;
    birthYear.textContent = `Birth year: ${info['birth_year']}`;
    homeWorld.textContent = `Home world: ${homeData['name']}`;

    container.appendChild(h1)
    container.appendChild(height)
    container.appendChild(gender)
    container.appendChild(birthYear)
    container.appendChild(homeWorld)

}


let getData = async () => {

    let spinner = document.createElement('i')

    container.innerHTML = ''
    spinner.setAttribute('class', 'fab fa-galactic-republic fa-spin fa-8x loading')
    container.appendChild(spinner)

    let random = Math.floor(Math.random() * 82) + 1;
    let fetchd = await fetch('https://swapi.dev/api/people/' + random);
    let data = await fetchd.json();
    let fetchHome = await fetch(data.homeworld);
    let homeData = await fetchHome.json();

    if (data.status !== 200) {

        renderdResult(data, homeData)
        console.log(fetchd)

    } else {
        throw new Error('Ohhh no that person is not available')
    }

}


document.querySelector('button').addEventListener('click', getData)