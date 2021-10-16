let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

let userItem = prompt('Enter an item')

function checkBasket() {
    if (userItem in amazonBasket) {
        console.log(`${userItem} is in the basket`)
    } else {
        console.log('Sorry the item is not in the basket')
    }
}

checkBasket()