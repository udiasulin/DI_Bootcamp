let input = document.querySelector('#someInput')

input.addEventListener("keydown", checkChar);

function checkChar(event) {

    if (event.keyCode <= 90 && event.keyCode >= 65) {
        console.log(event.key, " is a string")
    } else {
        console.log(event.key, " is NOT a string")
        event.preventDefault();
    }
}