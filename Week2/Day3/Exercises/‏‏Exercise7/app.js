let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
let newArr = []

for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0);
    names.splice(i, 1, firstLetter)
}
console.log(names.join(''))