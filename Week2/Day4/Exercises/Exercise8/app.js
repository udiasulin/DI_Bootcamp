let tip = 0;
let bill = parseInt(prompt('Enter the bill'))

function tipCalc(bill) {

    if (bill < 50) {
        tip += (bill / 100) * 0.20;
    } else if (bill > 50 && bill < 200) {
        tip += (bill / 100) * 15;
    } else if (bill > 200) {
        tip += (bill / 100) * 0.10;
    }

    console.log(`your final bill is ${bill+tip}$, the tip amount is ${tip}$`)
}

tipCalc(bill)