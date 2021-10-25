let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

colors.forEach((elementC, index) => {
    let o = ordinal[index + 1]

    if (o === undefined) {
        o = '';
    }
    
    console.log(`${index + 1}${o} choice is ${elementC}`)
})


// 1st choice is Blue .