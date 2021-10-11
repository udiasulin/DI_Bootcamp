let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.substring(13, 16);
let wordBad = sentence.substring(22, 25);
    
if(sentence.indexOf(wordNot) < sentence.indexOf(wordBad)){
    console.log(sentence.replace('not that bad', 'good'))
}else{
    console.log("The movie is not that bad, I like it")
}
