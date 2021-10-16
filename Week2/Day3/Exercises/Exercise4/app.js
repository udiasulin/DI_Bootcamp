let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
let userName = prompt('Enter your name');

if (userName in guestList) {
<<<<<<< HEAD
    let users = Object.valuesra(guestList);
    console.log(users) 
    console.log(`Hi I'm ${userName}, and iam from ${guestList}`)
=======
    console.log(`Hi I'm ${userName}, and iam from ${guestList[userName]}`)
>>>>>>> 74641e4b6d974b7b886556e1614f837c30a5ace8
} else {
    console.log('Hi! I am a guest.')
}
