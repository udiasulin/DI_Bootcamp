let n = 6;
let str = "";

let result = "*"
while (result.length <= 7) {
    console.log(result);
    result = result + "*";
}

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);

