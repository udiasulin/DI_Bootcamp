let userNum = parseInt(prompt('Enter a number between 1 and 100'));
let text = ''
for(let subNum = 1; subNum  < userNum; subNum++){
    if(subNum > 1){
        console.log(` ${userNum - subNum} bottles of beer on the wall 
      ${userNum - subNum} bottles of beer Take ${subNum} down,
      pass them around`)
    }else{
        console.log(` ${userNum - subNum} bottles of beer on the wall 
        ${userNum - subNum} bottles of beer Take ${subNum} down,
        pass it around`)
  
    }

    
}