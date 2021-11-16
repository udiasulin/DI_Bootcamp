let express = require('express');
let app = express()

app.get('/', (req, res) => {
    res.send('<h1>THE HTML Tag</h1>')
})

app.listen(3000, (req, res) => {
    console.log('listening port 3000');
})