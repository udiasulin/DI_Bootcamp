import logo from './logo.svg';
import './App.css';
import React from 'react';
import FavoritColor from './components/FavoritColor';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.shootRegular = this.shootRegular.bind(this)
    }


    shoot() {
        alert('Great Shot!')
    }

    shootRegular() {
        alert(this)
    }

    shootRegularWithParameter(val) {
        console.log(val)
        alert(val)
    }

    shootWithArgument(val) {
        alert(val)
    }

    shootTwo = () => {
        alert(this)
    }

    render() {

        return (
            <>
                < FavoritColor />
                <button onClick={this.shoot}>Take a shot!</button>
                <button onClick={this.shootRegular}>Keep Shooting!</button>
                <button onClick={this.shootRegularWithParameter.bind(this, 'Goal!')}>Shooting!</button>
                <button onClick={() => this.shootWithArgument('Goal!!!')}>Shooting!</button>
                <button onClick={this.shootWithArgument}>Keep Shooting!</button>
            </>
        )
    }

}

export default App;
