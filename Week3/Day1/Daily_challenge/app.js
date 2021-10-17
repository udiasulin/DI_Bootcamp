let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
let planetSection = document.querySelector('.listPlanets');

for (planet of planets) {

    let planetDiv = document.createElement('div');
    let planetP = document.createElement('p');

    planetDiv.setAttribute('class', 'planet');
    planetDiv.classList.add(planet)
    planetP.textContent = planet;

    planetSection.appendChild(planetDiv)
    planetDiv.appendChild(planetP)



    console.log(planetDiv)
}