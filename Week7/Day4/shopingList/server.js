const exp = require('express');
const fs = require('fs');

const bp = require('body-parser')
const app = exp();


app.use('/', exp.static(__dirname + '/public'))

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

let list = [];
app.post('/list', (req, res) => {
    try {
        const f = fs.readFileSync('./shopingList');
        list = JSON.parse(f)
    }
    catch (e) {
        // console.log(e);
    }
    finally {
        list.push(req.body)
    }
    fs.writeFileSync('./shopingList.txt', JSON.stringify(list), err => {
        if (err) {
            console.log('error writing to file');
        }
    })

    res.send({ message: 'OK' })
})

app.get('/list', (req, res) => {

    let list = [];
    try {
        const f = fs.readFileSync('./shopingList.txt');
        list = JSON.parse(f);
        console.log(list)
    }
    catch (e) {
        console.log(e)
        res.send('data not found')
    }
    console.log('listObj', list)
    res.send(list)
})




app.listen(3000, () => {
    console.log('listening to 3000')
})