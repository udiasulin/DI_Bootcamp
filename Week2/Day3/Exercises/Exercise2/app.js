let people = ["Greg", "Mary", "Devon", "James"]
people.shift()
people.splice(2,1,'Jason')
people.push('Udi')

// for(let i = 0; i < people.length ; i++ ){
//     console.log(people[i])
// }


for(let i = 0; i < people.length ; i++ ){
    if(i === 3){
        break;
    }
    console.log(people[i])
}

