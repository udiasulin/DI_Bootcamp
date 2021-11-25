import React from 'react';

class FavoritColor extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'yellow' })
        }, 5000);
    }

    changeColor = () => {
        this.setState({ color: 'blue' })
    }
    render() {
        return (
            <>
                <h1>My Favorite Color is {this.state.color}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </>
        )
    }

}

export default FavoritColor;
