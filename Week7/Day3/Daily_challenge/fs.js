
let fs = require('fs')

fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        let arr = data.split('')
        let steps = 0;
        arr.filter(x => {
            if (x === '>') {
                steps++
            } else if (x === '<') {
                steps--
            }
        }).length;
        console.log(`Total Steps - ${steps}`)
    }
})


fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        let arr = data.split('')
        let position = 0;
        let steps = 0;
        arr.find(x => {
            if (x === '>') {
                position++
                steps++
            } else if (x === '<') {
                position++
                steps--
            }
            if (steps === -1) {
                return position
            }
        });
        console.log(`Fisrt time in left side in - ${position} steps`)
    }
})
