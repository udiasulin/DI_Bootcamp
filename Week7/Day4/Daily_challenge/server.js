const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = exp();

app.use(exp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/', exp.static(__dirname + '/public'))

app.post('/register', (req, res) => {
    fs.readFile('user_data.json', function (err, data) {
        let json = JSON.parse(data)
        let check = json.some(e => e.userName === req.body.userName || e.password === req.body.password)
        if (check) {
            res.send({ message: 'Error' })
        } else {
            json.push(req.body)
            fs.writeFile('user_data.json', JSON.stringify(json), err => {
                console.log(err)
            })
            res.send({ message: 'OK' })
        }

    })
})

app.post('/', (req, res) => {
    fs.readFile('user_data.json', function (err, data) {
        let json = JSON.parse(data)
        let check = json.some(e => e.userName === req.body.userName && e.password === req.body.password)
        if (check) {
            res.send({ message: req.body.userName })
        } else {
            res.send({ message: 'Error' })
        }
    })
})

app.listen(3000, () => {
    console.log('Listening to 3000')
})