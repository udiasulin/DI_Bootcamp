const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];


(function (robots) {

    let container = document.querySelector('.container');
    let search = document.querySelector('.search');

    search.addEventListener('keyup', (event) => {

        let noMatch = document.createElement('h1');
        let searchVal = event.target.value.toLowerCase();
        
        noMatch.innerText = 'No match found';

        container.innerHTML = '';

        let searchResult = robots.filter((e) => {
            if (e['name'].toLowerCase().includes(searchVal)) {
                return true;
            } else {
                return false;
            }
        })

        if (searchResult.length === 0) {
            container.appendChild(noMatch)
        } else {
            displayRobots(searchResult)
        }

    })

    let displayRobots = (robots) => {

        for (robot of robots) {

            let card = document.createElement('div');
            let imgCard = document.createElement('img');
            let headerCard = document.createElement('h2');
            let cardPera = document.createElement('p');

            card.classList.add('card')
            imgCard.classList.add('imgCard')
            headerCard.classList.add('headerCard')
            cardPera.classList.add('cardPera')

            imgCard.setAttribute('src', robot['image'])
            headerCard.innerText = robot['name']
            cardPera.innerText = robot['email']


            container.appendChild(card)
            card.appendChild(imgCard)
            card.appendChild(headerCard)
            card.appendChild(cardPera)


        }
    }

    displayRobots(robots);

})(robots)