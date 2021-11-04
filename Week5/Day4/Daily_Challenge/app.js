<<<<<<< HEAD
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});


Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
=======
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});


Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
>>>>>>> fbbfe70745e4b6640d5be745b2eef0f46a66ca3e
}).catch((err) => console.log(err))