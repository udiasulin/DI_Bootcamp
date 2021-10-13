let family = {
    father: 'Tony',
    mother: 'pepper',
    daughter: 'morgan'
}

for(let property in family){
    console.log(property)
}

for(let property in family){
    console.log(family[property])
}