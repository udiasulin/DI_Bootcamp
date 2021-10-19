let myForm = document.getElementById("MyForm")
let input = document.getElementById("radius")
let p = document.querySelector("p")


input.addEventListener("blur", function (event) {
    alert("Input field lost focus.");
})



p.addEventListener("dblclick", function () {
    let p = document.createElement("p")
    p.innerHTML = "this is double click - create paragraph"
    myForm.appendChild(p)
})


input.addEventListener("input", function (event) {
    let formValue = event.target.value;
    let p = document.createElement("div")
    p.innerText = formValue
    myForm.appendChild(p)

})