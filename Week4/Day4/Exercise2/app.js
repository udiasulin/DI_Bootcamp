let fullName = { first: 'Elie', last: 'Schoppik' }

let displayStudentInfo = ({ first, last }) => {
    console.log(`your full name is - ${first} ${last}`)
}

displayStudentInfo(fullName)