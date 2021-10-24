let articleP = document.querySelectorAll("p")
let removeLastP = articleP[3].remove()


let h2 = document.querySelector("h2")
h2.addEventListener("mouseover", function (event) {
    h2.classList.add("fade")
})

h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red"
})

let h1 = document.querySelector("h1");
h1.style.fontSize = Math.floor(Math.random() * 100);


let h3 = document.querySelector("h3");
h3.style.display = "none";


let boldBtn = document.getElementById("bold")
boldBtn.addEventListener("click", function () {
    let Allp = document.querySelectorAll("p");
    for (p of Allp) {
        p.style.fontWeight = "bold";
    }

})



let submit = document.getElementById("submit");
let inputOne = document.getElementById("fname")
let inputTwo = document.getElementById("lname")




let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let value = e.target.fname.value;
    console.log(value);
    inputOne.value = " "
    row1.innerHTML = value


})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let valueTwo = e.target.lname.value;
    console.log(valueTwo);
    inputTwo.value = " "
    row2.innerHTML = valueTwo

})

let article = document.querySelector("article")
let table = document.createElement('table')
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let row1 = document.createElement('td');
let row2 = document.createElement('td');


let heading1 = document.createElement('th');
let heading2 = document.createElement('th');

heading1.innerHTML = "First name";
heading2.innerHTML = "Last name";

thead.appendChild(heading1)
thead.appendChild(heading2)



tbody.appendChild(row1)
tbody.appendChild(row2)


article.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
