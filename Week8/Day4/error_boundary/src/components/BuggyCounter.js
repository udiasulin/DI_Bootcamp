import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            hasError: false
        }
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }
        return (
            <>
                <div>
                    <p id="number">{this.state.counter}</p>
                </div>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}

export default BuggyCounter