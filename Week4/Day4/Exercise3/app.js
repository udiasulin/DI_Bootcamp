const users = { user1: 18273, user2: 92833, user3: 90315 }
let newId = [];

for (item of Object.entries(users)) {
    newId.push(item[0], item[1] * 2);
}
console.log(newId);