const http = require('http')
const ma = require('./main.js')
const b = 5

const server = http.createServer((req, res) => {
    res.end('HI from the front end')
})

server.listen(3000, () => {
    console.log('listening to 3000')
})

console.log(ma.number + b)
console.log(ma.date())
