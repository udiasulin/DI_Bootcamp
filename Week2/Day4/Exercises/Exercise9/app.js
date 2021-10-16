let userData =[];

function hotelCost() {

    let numOfNights;
    let totalNightPrice = 0;

    do {
        numOfNights = prompt('Enter the number of nights')
    } while (isNaN(numOfNights) || numOfNights === '')

    totalNightPrice = parseInt(numOfNights) * 140;

    return userData.push(totalNightPrice);
}


function planeRideCost() {

    let destination = prompt('Enter the destination').toLowerCase();
    let desinationPrice;

    if (destination === 'london') {
         desinationPrice = 183
    } else if (destination === 'paris') {
          desinationPrice = 220
    } else if (destination === '') {
        alert('You didnt enter destination')
    } else {
          desinationPrice = 300
    }
    return userData.push(desinationPrice)
}

function rentalCarCost() {
    let rentalCar = prompt('Enter the number of days you want to rental the car');

    while (isNaN(rentalCar) || rentalCar === '') {
        rentalCar = prompt('Enter the number of days you want to rental the car')
    }
    return  userData.push(parseInt(rentalCar) * 40)
}

function totalVacationCost() {
    hotelCost()
    planeRideCost()
    rentalCarCost()
    console.log(`The hotel gone cost $${userData[0]},
    the plane ride is $${userData[1]},
    the rental car gone cost $${userData[2]}}`)
}

// totalVacationCost()
