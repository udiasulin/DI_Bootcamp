let btn = document.querySelector('button')
let animate = document.querySelector('#animate')
let move = 0;
let id;

btn.addEventListener('click', myMove)


function myMove(e) {


    let id = setInterval(function () {
        if (move == 350) {
            clearInterval(id);
        }
        else {
            move += 5;
            animate.style.left = move + 'px';
        }
    }, 25);

}


