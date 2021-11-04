<<<<<<< HEAD
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// console.log('calling');
// waiting 2 sec 
// resolve('resolved');
=======
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// console.log('calling');
// waiting 2 sec 
// resolve('resolved');
>>>>>>> fbbfe70745e4b6640d5be745b2eef0f46a66ca3e
