const exp = require('express');
let app = exp();

// Exercise 1

// app.get('/', (req, res) => {
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//     res.json(user)
// })


app.use('/', exp.static(__dirname + '/public'))

//Exercise 2
// app.get('/:id', (req, res) => {

//     let id = req.params;
//     console.log(id);
//     res.send(id)


// })

//Exercise 3 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

})

app.get('/js/exercisesJsall.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/js/exercisesJsall.js'));

})


app.listen(3000, () => {
    console.log('listening port 3000')
})