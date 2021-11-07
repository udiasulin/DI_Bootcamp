<<<<<<< HEAD
let resolvePromise = new Promise((resolve) => setTimeout(() => resolve("success"), 4000))
    .then((result) => console.log(result))
    .catch("Ooops something went wrong");

setTimeout(() =>
    Promise.resolve("success")
        .then((res) => console.log(res))
        .catch("Ooops something went wrong"), 4000);
=======
let resolvePromise = new Promise((resolve) => setTimeout(() => resolve("success"), 4000))
    .then((result) => console.log(result))
    .catch("Ooops something went wrong");

setTimeout(() =>
    Promise.resolve("success")
        .then((res) => console.log(res))
        .catch("Ooops something went wrong"), 4000);
>>>>>>> fbbfe70745e4b6640d5be745b2eef0f46a66ca3e
