import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    render() {
        return (
            <>
                <Garage size='small'/>
                <h1>Hi iam a {this.state.color}  car</h1>
                <h1>{this.props.info.name} {this.props.info.model}</h1>
            </>
        )
    }
}
export default Car