let total = 0
function changeEnough(myWallet, itemPrice) {
    for(i = 0 ;i < myWallet.length; i++){
        if( i == 0){
            total += myWallet[i] * 0.25;
        }else if(i == 1){
            total +=  myWallet[i] * 0.10;
        }else if(i == 2){
            total += myWallet[i] * 0.05;
        }else if(i == 3){
           total +=  myWallet[i]  * 0.01;
        }
    }
    if(total >= itemPrice){
      return console.log(true)
    }else{
        return console.log(false)
    }
}

changeEnough([2, 100, 0, 0], 14.11) // ➞ false
changeEnough([0, 0, 20, 5], 0.75) // ➞ true
