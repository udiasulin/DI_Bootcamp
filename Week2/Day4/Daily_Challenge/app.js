let answer = prompt("Please, enter several words (separated by commas)");
let itemArr = answer.split(',');
let maxLength = 0;

for (item in itemArr) {
    if (itemArr[item].length > maxLength) {
        maxLength = itemArr[item].length;
    };
};

let topButtomFrame = '*'.repeat(maxLength * 2);
console.log(topButtomFrame);

for (item in itemArr) {
    let fixedWorld = itemArr[item].trim().padEnd(maxLength, ' ');
    console.log('* ' + fixedWorld + ' *');
};

console.log(topButtomFrame);