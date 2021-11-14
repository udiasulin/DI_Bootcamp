const largeNumber = 356;



function getDate() {
    let date = new Date
    return `the date and time are currently : ${date} `;
}

module.exports = {
    number: largeNumber,
    date: getDate
}