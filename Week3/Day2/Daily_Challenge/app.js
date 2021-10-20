const fields = document.querySelectorAll("ul>li>input");
const libBtn = document.querySelector("#lib-button");
const shufBtn = document.querySelector("#shuffleButton");
const story = document.querySelector("#story");
let fieldValues = [];


libBtn.addEventListener("click", libBtnClick);
shufBtn.addEventListener("click", shuffleValues);


function libBtnClick(event) {

    for (input of fields) {
        if (input.value === "") {
            alert(`please fill the ${input.id} input`);
        }

    }


    fieldValues = [];

    for (let i = 0; i < fields.length; i++) {
        fieldValues.push(fields[i].value)
    }

    resetFields()

    story.innerHTML = fillStory(fieldValues);

}

function shuffleValues() {

    if (fieldValues.length != 5) {
        alert("First you need to Lib it!")
        return
    } else {
        story.innerHTML = fillStory(shuffle(fieldValues))
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function resetFields() {
    for (let i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
}


function fillStory(valuesArr) {
    const storyArr = ["", " a ", " in ", "", " was arrested this morning ", "", " after", "", " he ", "", "."];
    const gaps = [0, 3, 5, 7, 9];
    for (let i = 0; i < 5; i++) {
        storyArr[gaps[i]] = "<b>" + valuesArr[i] + "</b>";
    }
    return storyArr.join("");
}