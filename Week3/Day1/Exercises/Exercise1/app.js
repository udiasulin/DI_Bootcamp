let divNav = document.querySelector('div')
let navList = document.querySelector('ul')
let newLi = document.createElement('li')
let logOut = document.createTextNode('Logout')

divNav.setAttribute('id', 'socialNetworkNavigation')

console.log(navList.firstElementChild.textContent)
console.log(navList.lastElementChild.textContent)

navList.appendChild(newLi)
newLi.appendChild(logOut)
