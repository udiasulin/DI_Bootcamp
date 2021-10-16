let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shopingList = ['banana', 'orange', 'apple']
let toatl = 0;

function myBill() {
    for (let item of shopingList) {
        if (item in stock) {
            stock[item] -= 1;
        }
        if (item in prices) {
            toatl += prices[item]
        }

    }
    return console.log(toatl,stock) 
}

myBill()