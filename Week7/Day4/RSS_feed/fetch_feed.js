let Parser = require('rss-parser');
let parser = new Parser();

let getFeed = async () => {

    try {
        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        return feed

    } catch (error) {
        console.error(error);
    }

};

let getCategories = async () => {

    try {
        let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        let categories = feed.items.map(item => {
            return item.categories
        });
        return categories
    } catch (error) {
        console.error(error);
    }

};


module.exports = {
    feedcall: getFeed,
    feedCategories: getCategories
};

