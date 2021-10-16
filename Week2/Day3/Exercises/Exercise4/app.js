let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
let userName = prompt('Enter your name');

if (userName in guestList) {
    let users = Object.valuesra(guestList);
    console.log(users) 
    console.log(`Hi I'm ${userName}, and iam from ${guestList}`)
} else {
    console.log('Hi! I am a guest.')
}
