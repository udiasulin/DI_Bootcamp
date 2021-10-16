// let userAge = parseInt(prompt('What is your age'));

function checkDriverAge(userAge) {
    if (userAge > 18) {
        alert("You are old enough to drive, Powering On. Enjoy the ride!")
    } else if (userAge < 18) {
        alert("Sorry, you are too young to drive this car. Powering off")
    } else if (userAge === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!")
    }

}

checkDriverAge(18)
checkDriverAge(21)
checkDriverAge(17)
