let selectCurrency = document.querySelector('#currecnySelect')
let selectToCurrency = document.querySelector('#toCurrecny')
let input = document.querySelector('input')
let form = document.querySelector('form')
let result = document.querySelector('.result')

let displayCurrencies = (currencies) => {


    for (let currency in currencies) {

        let option = document.createElement('option')
        let optionTo = document.createElement('option')

        option.innerText = currency;
        option.value = currency;


        optionTo.innerText = currency;
        optionTo.value = currency;


        selectCurrency.appendChild(option)
        selectToCurrency.appendChild(optionTo)
    }

}



let convert = async (e) => {

    e.preventDefault();
    result.innerHTML = '';

    let fetched = await fetch('http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=' + selectToCurrency.value);
    let data = await fetched.json();

    if (data.status !== 200) {

        let currentCurrency = Object.values(data.quotes);
        let answer = input.value * currentCurrency;
        let answerP = document.createElement('p')

        answerP.innerText = answer;
        result.appendChild(answerP)
    } else {
        throw new Error('Something wrong')
    }


}


form.addEventListener('submit', convert)


let getData = async () => {


    let fetchedCurrencies = await fetch('http://api.currencylayer.com/list&live?access_key=6b543e9294a71d26a6606f5449cf71a6');
    let currenciesData = await fetchedCurrencies.json();

    if (currenciesData.status !== 200) {
        displayCurrencies(currenciesData['currencies'])
        console.log(currenciesData)
    } else {
        throw new Error('llk')
    }

}

getData()