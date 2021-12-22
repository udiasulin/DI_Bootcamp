const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');
const env = require('dotenv');
const imageRoutes = require('./routes/images');
const albumsRoutes = require('./routes/albums');

env.config();
const app = exp();

app.use(bp.json({  extended: true }));
app.use(bp.urlencoded({  extended: true }));
app.use(cors());

//Routes
 app.use('/workshop', imageRoutes)
 app.use('/home', albumsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})