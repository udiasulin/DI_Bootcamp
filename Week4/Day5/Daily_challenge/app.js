let strOne = ['t', 'e', 'a', 't'];
let strTwo = ['t', 't', 'e', 'w'];

function anagram(strOne, strTwo) {
    let firstString = strOne.length;
    let secondString = strTwo.length;

    if (firstString != secondString)
        return false;
    strOne.sort();
    strTwo.sort();
    for (let i = 0; i < firstString; i++)
        if (strOne[i] != strTwo[i])

            return false;

    return true;
}


if (anagram(strOne, strTwo))
    console.log("The two strings are" + " anagram of each other")

else
    console.log("The two strings are not" + " anagram of each other");

