const exp = require('express');
const env = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const bp = require('body-parser');
const feed = require('./fetch_feed');


const app = exp();
env.config();

app.use(cors());
app.use(exp.urlencoded({ extended: true }))
app.use(exp.json())
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    feed.feedcall()
        .then(data => res.render('pages/index', { data: data.items }))
        .catch(e => { console.log(e) })
})


app.get('/search', (req, res) => {
    feed.feedCategories()
        .then(function (data) {
            let categories = data.flat()

            res.render('pages/search', {
                data: [],
                dataC: categories
            })
        });
})

app.post('/search/title', (req, res) => {
    let inputValue = req.body.title;
    Promise.all([feed.feedcall(), feed.feedCategories()]).then((values) => {
        let searchData = values[0];
        let categoryData = values[1];
        let searchResults = searchData.items.filter(element => {
            if (element.title.toLowerCase().includes(inputValue.toLowerCase())) {
                return element
            }
        })
        let categories = categoryData.flat()
        res.render('pages/search', {
            data: searchResults,
            dataC: categories
        })
    })
})

app.post('/search/category', (req, res) => {
    let categoryValue = req.body.category;
    feed.feedcall()
        .then(function (data) {
            let arr = []
            for (item of data.items) {
                arr.push(item.categories)
            }
            
            let searchResults = data.items.filter(element => {
                if (element.categories.find(e => e === categoryValue)) {
                    return element
                }
            })
            console.log(searchResults)
            res.render('pages/search', {
                data: searchResults,
                dataC: arr.flat()
            })
        });

})


app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
})
