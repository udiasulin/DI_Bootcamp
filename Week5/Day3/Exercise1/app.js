
let compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve(`${num} is grater`)
        } else {
            reject(`${num} is less than ten`)
        }
    })
}

compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))