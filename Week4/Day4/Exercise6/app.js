// [2] === [2] //false
// {} === {}//false

const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5 };//5 
object1.number = 4;


class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }


}

class Mamal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color)
        this.sound = sound

    }
    sound(AnimalSound) {
        console.log(AnimalSound)
    }
}

let cow = new Mamal('Macdonald', 'Mamal', 'White', 'Mooooooo');

console.log(cow)
