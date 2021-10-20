let item = document.querySelector('#item');
let dropZone = document.querySelector(".dropzone");


item.addEventListener('dragstart', startDragging)


function startDragging(event) {

    event.target.classList.add("startDragging");
    event.dataTransfer.setData("text/plain", event.target.id)


}

function listenersFunc() {
    dropZone.addEventListener("dragover", draggingOver)
    dropZone.addEventListener("drop", dropping)

}

listenersFunc()


function draggingOver(event) {
    event.preventDefault();
}

function dropping(event) {
    event.preventDefault();

    let elementToDrop = event.dataTransfer.getData("text/plain");
    let elemNode = document.getElementById(elementToDrop)

    event.target.appendChild(elemNode)

}