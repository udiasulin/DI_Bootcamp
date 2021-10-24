let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach(elment => { if (elment === 'Violet') console.log('I have the color you looking for') })
colors.forEach((elment, index) => { console.log(`${index + 1}# cohice is ${elment}`) })

