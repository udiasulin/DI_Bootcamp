let sum = 0;

function isDivisible(divisor) {
    for (i = 0; i <= 500; i = i + divisor) {
        console.log(i)
        sum += i
    }
    console.log(sum)
}

isDivisible(23)