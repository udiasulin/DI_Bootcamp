let firstUl = document.querySelector('.list')
let allUl = document.querySelectorAll('.list')
let secondUl = document.querySelectorAll('.list')[1];

firstUl.classList.add('university')
firstUl.classList.add('attendance')
secondUl.removeChild(secondUl.childNodes[3])

firstUl.lastElementChild.textContent = 'Richard';

for (item of allUl) {
    let newLi = document.createElement('li')

    item.classList.add('student_list')
    newLi.textContent = 'Hey students';

    item.appendChild(newLi)

    item.firstElementChild.textContent = 'Udi';


}
