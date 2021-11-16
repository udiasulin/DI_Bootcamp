const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<h1>This is My first response</h1>' + '<h2>This is My second response</h2>'+
    '<h3>This is My third response</h3>')
})


server.listen(3000, () =>{
    console.log('listening on 3000')
})