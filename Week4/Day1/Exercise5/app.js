
let isString = (str) => {
    return typeof str === 'string'
}

console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false