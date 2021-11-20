let registerForm = document.getElementById('form')
let loginForm = document.getElementById('loginForm')

let postUser = async (url, data) => {

    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => data.json())
        .catch((e) => console.log(e))

    return result
}


let registerUser = async (event) => {

    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let userName = document.getElementById('userName').value
    let password = document.getElementById('password').value
    let messageDiv = document.getElementById('mes')

    let formObj = {
        firstName,
        lastName,
        email,
        userName,
        password
    }

    let PromiseData = await postUser('/register', formObj)
    let me = document.createElement('span')
    console.log(PromiseData)
    if (PromiseData.message === 'OK') {
        me.textContent = 'Hello Your account is now created';
        messageDiv.appendChild(me)
    }
    if (PromiseData.message === 'Error') {
        me.textContent = 'user name or password are alredy taken';
        messageDiv.appendChild(me)
    }

    if (messageDiv.childElementCount > 1) {
        messageDiv.firstElementChild.remove()
    }

    registerForm.firstName.value = '';
    registerForm.lastName.value = '';
    registerForm.email.value = '';
    registerForm.userName.value = '';
    registerForm.password.value = '';
}



let loginUser = async (event) => {

    event.preventDefault()


    let userName = document.getElementById('loginuserName').value
    let password = document.getElementById('loginPassword').value
    let divMessage = document.getElementById('message')



    let loginObj = {
        userName,
        password
    }

    let PromiseCall = await postUser('/', loginObj)
    let message = document.createElement('span')

    if (PromiseCall.message === PromiseCall.message) {
        message.textContent = `hello ${PromiseCall.message}`;
        divMessage.appendChild(message)
    }
    if (PromiseCall.message === 'Error') {
        message.textContent = 'Username not exsist';
        divMessage.appendChild(message)
    }

    if (divMessage.childElementCount > 1) {
        divMessage.firstElementChild.remove()
    }


    loginForm.username.value = '';
    loginForm.password.value = '';
}





if (loginForm) {
    loginForm.addEventListener('submit', loginUser)

    loginForm.addEventListener('keyup', function (e) {

        if (loginForm.username.value === "" || loginForm.password.value === "") {
            document.getElementById('s').disabled = false;
        }
    })
}


if (registerForm) {
    registerForm.addEventListener('submit', registerUser)

    registerForm.addEventListener('keyup', function (e) {
        if (registerForm.userName.value !== "" || registerForm.password.value !== ""
            || registerForm.firstName.value !== "" || registerForm.lastName.value !== ""
            || registerForm.email.value !== "" || registerForm.password.value !== "") {
            document.getElementById('r').disabled = false;
        }
    })

}