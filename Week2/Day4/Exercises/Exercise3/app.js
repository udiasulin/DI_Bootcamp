function checkNumber() {
    for (i = 0; i <= 100; i++){
        if(i % 2 == 0){
            console.log(`The number ${i} is even`)
        }else{
            console.log(`The number ${i} is odd`)
        }
    }
}

checkNumber()