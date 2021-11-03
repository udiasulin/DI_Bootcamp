let resolvePromise = new Promise((resolve) => setTimeout(() => resolve("success"), 4000))
    .then((result) => console.log(result))
    .catch("Ooops something went wrong");

setTimeout(() =>
    Promise.resolve("success")
        .then((res) => console.log(res))
        .catch("Ooops something went wrong"), 4000);
