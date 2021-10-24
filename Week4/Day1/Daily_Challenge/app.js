const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
let usernames = []
let topPlayers = []
let totalScore = 0;

gameInfo.forEach(element => {
    usernames.push(`${element['username']}!`)
    return usernames
})

gameInfo.forEach(element => {
    if (element['score'] > 5) {
        return element['username']
    }
    topPlayers.push(`${element['username']}!`)
})

gameInfo.forEach(element => {
    if (element['score'] > 5) {
        return element['username']
    }
    topPlayers.push(`${element['username']}!`)
})

gameInfo.forEach(element => { totalScore += element['score'] })

console.log(usernames)
console.log(topPlayers)
console.log(totalScore)