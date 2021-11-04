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
