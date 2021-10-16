let n = 6;
let str = "";

<<<<<<< HEAD
let result = "*"
while (result.length <= 7) {
    console.log(result);
    result = result + "*";
=======
for(let i =1;i < 7;i++){
    console.log('*'.repeat(i))
>>>>>>> 74641e4b6d974b7b886556e1614f837c30a5ace8
}

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    str += "\n";
}
<<<<<<< HEAD
console.log(str);

=======
console.log(str);
>>>>>>> 74641e4b6d974b7b886556e1614f837c30a5ace8
