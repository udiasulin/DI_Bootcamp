const exp = require('express');
const app = exp();


app.get('/aboutMe/:hobby', (req, res) => {
    let hobby = JSON.stringify(req.params)

    if (typeof (hobby)) {
        res.send(req.params);
    } else {
        res.status(404).send("page not found!");
    }
});

app.get('/pic', (req, res) => {
    res.set('Content-Type', 'image/jpg');
    res.sendFile(__dirname + "/public/andras-kerekes-unsplash.jpg");
});

app.use('/form', exp.static(__dirname + '/public'));

app.get('/formData', (req, res) => {
    console.log(req.query);
    res.send(
        `${req.query.email} sent you a message  ${req.query.message} `
    );
});


app.listen(3000, () => console.log('listening on port 8080'));