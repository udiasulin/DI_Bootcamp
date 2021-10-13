let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
let userName = prompt('Enter your name');

if (userName in guestList) {
    console.log(`Hi I'm ${userName}, and iam from ${guestList[userName]}`)
} else {
    console.log('Hi! I am a guest.')
}
