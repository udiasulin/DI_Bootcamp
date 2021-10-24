let bankAmount = 8500;
let vat = 0.17;
let details = ["+200", "-100", "+146", "+167", "-2900"]
let sum = 0;
let vatSum = 0;

details.forEach(element => {
    sum += parseInt(element)

    if (element.includes('-')) {
        vatSum += element * vat
        return vatSum
    }
    return sum
})

console.log(`Your current amount is : ${sum += vatSum += bankAmount}`)
