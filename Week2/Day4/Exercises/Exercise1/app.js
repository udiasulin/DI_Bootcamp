function infoAboutMe(){
    console.log('udi,28,somthing')
}

function infoAboutPerson(personName, personAge, personFavoriteColor,personHobbies){

    for(let hobbie of personHobbies){
         hobbie = personHobbies
    }
     console.log(`your name is:${personName}, your age:${personAge},
      your favorite color is: ${personFavoriteColor},
      person hobbies: ${personHobbies}`)
}

infoAboutMe()
infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])