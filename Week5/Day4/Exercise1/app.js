<<<<<<< HEAD
let url = "https://swapi.dev/api/starships/9/";

let req = async () => {

    try {
        let fetched = await fetch(url);
        if (fetched.status === 200) {
            let response = await fetched.json();
            console.log(response)
        } else {
            throw new Error("not 200")
        }
    } catch (e) {
        console.log("The error is:", e)
    }
}

req()
=======
let url = "https://swapi.dev/api/starships/9/";

let req = async () => {

    try {
        let fetched = await fetch(url);
        if (fetched.status === 200) {
            let response = await fetched.json();
            console.log(response)
        } else {
            throw new Error("not 200")
        }
    } catch (e) {
        console.log("The error is:", e)
    }
}

req()
>>>>>>> fbbfe70745e4b6640d5be745b2eef0f46a66ca3e
