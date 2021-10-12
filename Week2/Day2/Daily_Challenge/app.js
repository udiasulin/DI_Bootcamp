let sentence = "The dinner was not so bad I like it";
let arrSentence = sentence.split(" ");
let indexBad = arrSentence.indexOf("bad");
let indexNot = arrSentence.indexOf("not");


if(indexBad > indexNot && indexNot !== -1 && indexBad !== -1){
    arrSentence.splice(indexNot, indexBad -  indexNot + 1, "good")
    result = arrSentence.join(" ")
	console.log(result)

} else {
	console.log(sentence)
}