import React from 'react';
import './App.css';
import quotes from './components/QuotesDatabase';
import randomColor from "randomcolor";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            bgColor: '',
            display: false,
            lastNumber: 0

        }
    }

    generateNumber = () => {
        let randomNumber = Math.floor(Math.random() * quotes.length)
        if (randomNumber !== this.state.lastNumber) {
            this.setState({ lastNumber: randomNumber })
            return randomNumber
        } else {
            this.generateNumber()
        }

    }

    getRandomQuote = () => {


        let header = document.getElementById('header')
        let btn = document.getElementById('btn')

        let generatedNum = this.generateNumber()

        let found = quotes.find((element, index) => {
            if (index === generatedNum) {
                return element
            }
        })

        this.setState({
            quote: found.quote,
            author: found.author
        })

        let color = randomColor();
        this.setState({
            bgColor: color
        });

        document.body.style.backgroundColor = this.state.bgColor;
        header.style.color = this.state.bgColor;
        btn.style.color = this.state.bgColor;

    }


    componentDidMount() {
        document.body.style.backgroundColor = this.state.bgColor;
        this.getRandomQuote()
    }


    render() {

        return (
            <>
                <div className='quoteDiv'>
                    <h1 id='header'>{this.state.quote}</h1>
                    <p>-{this.state.author === '' ? 'Unknown' : this.state.author}</p>
                    <button onClick={this.getRandomQuote} id="btn">New Quote</button>
                </div>
            </>
        )
    }
}
export default App;
