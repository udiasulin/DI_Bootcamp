let titleInput = document.getElementById("title")
let categoryInput = document.getElementById("category")
let container = document.getElementById("container")

if (titleInput === '' || categoryInput === '') {
    container.innerHTML = '';
}