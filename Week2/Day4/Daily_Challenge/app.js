let n = 6;
let str = "";

for(let i =1;i < 7;i++){
    console.log('*'.repeat(i))
}

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);