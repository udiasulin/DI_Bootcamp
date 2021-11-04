<<<<<<< HEAD

makeAllCaps = (arr) => {
    return arr.map((element) => element.toUpperCase());
};

sortWords = (arr) => {
    return arr.sort();
};

Promise.resolve(["pinapple", "apple", "banana"])
    .then(makeAllCaps)
    .then(sortWords)
    .then((result) => console.log(result));


let morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;

let toJs = (json) => {
    return new Promise((resolve, reject) => {
        if (Object.entries(JSON.parse(json)).length > 0) {
            resolve(JSON.parse(json));
        } else {
            reject(console.log("This is empty, what is this!"));
        }
    });
};

let toMorse = (morseJS) => {
    
    let wordArr = prompt("give me a word or a sentence and i will translate to morse").toLowerCase().split("");
    
    console.log(wordArr);
    
    return new Promise((resolve, reject) => {
        if (wordArr.every((w) => w in morseJS)) {

            console.log(wordArr.map((w) => morseJS[w]));
            
            resolve(wordArr.map((w) => morseJS[w]));
        } else {

            reject("The word/sentence is in correct, it have strange Chars");
        }

    });

};

let joinWords = (arr) => arr.join("\n");

toJs(morse)
    .then((res) => toMorse(res))

    .then((res) => joinWords(res))
    .then((res) => console.log(res))
=======

makeAllCaps = (arr) => {
    return arr.map((element) => element.toUpperCase());
};

sortWords = (arr) => {
    return arr.sort();
};

Promise.resolve(["pinapple", "apple", "banana"])
    .then(makeAllCaps)
    .then(sortWords)
    .then((result) => console.log(result));


let morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;

let toJs = (json) => {
    return new Promise((resolve, reject) => {
        if (Object.entries(JSON.parse(json)).length > 0) {
            resolve(JSON.parse(json));
        } else {
            reject(console.log("This is empty, what is this!"));
        }
    });
};

let toMorse = (morseJS) => {
    
    let wordArr = prompt("give me a word or a sentence and i will translate to morse").toLowerCase().split("");
    
    console.log(wordArr);
    
    return new Promise((resolve, reject) => {
        if (wordArr.every((w) => w in morseJS)) {

            console.log(wordArr.map((w) => morseJS[w]));
            
            resolve(wordArr.map((w) => morseJS[w]));
        } else {

            reject("The word/sentence is in correct, it have strange Chars");
        }

    });

};

let joinWords = (arr) => arr.join("\n");

toJs(morse)
    .then((res) => toMorse(res))

    .then((res) => joinWords(res))
    .then((res) => console.log(res))
>>>>>>> fbbfe70745e4b6640d5be745b2eef0f46a66ca3e
    .catch((err) => console.log(err));