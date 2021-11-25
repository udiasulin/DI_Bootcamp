import React from "react";

class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

     changeColor = () => {
         this.setState({ color: 'blue' });
    }

    render() {

        return (
            <>
                <h1>My Phone Is a {this.state.brand}</h1>
                <h2>it is {this.state.color} {this.state.model} from {this.state.year}</h2>
                <button onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}
export default Phone