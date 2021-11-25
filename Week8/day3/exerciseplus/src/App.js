import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            text: 'ON',
            username: '',
            age: null,
            errormessage: '',
            value: 'Some text',
            brand: 'brand'
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            alert(` The Enter Key was pressed, your input is:${e.target.value}`)
        }
    }

    changeState = () => {
        if (this.state.isToggleOn) {
            this.setState({ text: 'OFF', isToggleOn: false })
        } else {
            this.setState({ text: 'ON', isToggleOn: true })
        }
    }

    addUserName = (e) => {
        this.setState({ username: e.target.value })

    }

    addUserAge = (e) => {
        if (isNaN(e.target.value)) {
            this.setState({ errormessage: 'The input is not anumber' })
            e.target.value = '';
        } else {
            this.setState({ age: e.target.value })
            this.setState({ errormessage: '' })
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    selectChange = (e) => {
        this.setState({ brand: e.target.value });
    }


    mySubmitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${e.target.username.value}`)
    }

    render() {
        let haeder;
        let { username } = this.state;

        if (username.length > 0) {
            haeder = <h1>Hello {this.state.username} {this.state.age}</h1>
        }

        function clickHandler() {
            alert('I was clicked')
        }

        return (

            <>
                <button onClick={clickHandler}>Click me!</button>
                <input onKeyPress={this.handleKeyPress} />
                <div>
                    <p>Exercise 9</p>
                    <button onClick={this.changeState} type="toggle">{this.state.text}</button>
                </div>
                {haeder}
                <form onSubmit={this.mySubmitHandler}>
                    <label htmlFor="username">Enter Your Name:</label>
                    <input type="text" onChange={this.addUserName} name="username" />
                    <label htmlFor="age">Enter Your Age:</label>
                    <input type="text" name="age" onChange={this.addUserAge} />
                    <h4>{this.state.errormessage}</h4>
                    <textarea name="text" id="text" cols="30" rows="10" value={this.state.value} onChange={this.handleChange}>
                    </textarea>
                    <select value={this.state.brand} onChange={this.selectChange}>
                        <option value= 'Volvo'>Volvo</option>
                        <option value= 'Ford'>Ford</option>
                        <option value= 'Fiats'>Fiat</option>
                    </select>
                    <button>Submit</button>
                </form>
            </>
        )
    }

}

export default App;
