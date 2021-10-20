let containerDiv = document.querySelector('.container');
let colorSection = document.querySelector('.colorSection');
let divSection = document.querySelector('.divSection');
let colorPlate = document.querySelector('.colorPlate');
let clearBtn = document.querySelector('.clearBtn');
let myColor;
let isMouseDown = false;

let colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'lightpink', 'blue', 'lightsalmon', 'magenta',
    'blueviolet', 'aqua', 'chartreuse', 'chocolate', 'royalblue', 'gold', 'crimson', 'teal', 'lime', 'darkgray', 'black']

for (let i = 0; i < colors.length; i++) {

    let colorsDiv = document.createElement('div');

    colorsDiv.classList.add('colorsDiv');
    colorsDiv.style.backgroundColor = colors[i];

    colorPlate.appendChild(colorsDiv);
    colorsDiv.addEventListener('click', getColor)
}


function getColor(event) {
    myColor = event.target.style.backgroundColor;
}

for (let i = 0; i < 1440; i++) {

    let toPaintDiv = document.createElement('div');

    toPaintDiv.classList.add('toPaintDiv');
    divSection.appendChild(toPaintDiv);

    toPaintDiv.addEventListener('mousedown', function (e) {
        isMouseDown = true;
        toPaintDiv.style.backgroundColor = myColor;

    })
    toPaintDiv.addEventListener('mouseover', function (e) {
        if (isMouseDown) {
            toPaintDiv.style.backgroundColor = myColor;
        }
    })
    toPaintDiv.addEventListener('mouseup', function (e) {
        isMouseDown = false;
    })

}

clearBtn.addEventListener('click', function (e) {

    let allChilds = divSection.children;
    for (child of allChilds) {
        child.style.backgroundColor = 'white';
    }

})
