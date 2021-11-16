const exp = require('express');
const user = require('./module')

const app = exp();


app.get('/',(req,res)=>{
    res.json(user)
  })
  

app.listen(8080, () => {
    console.log('listening to 8080')
})