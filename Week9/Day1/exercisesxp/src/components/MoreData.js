import React from "react";

class MoreData extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <h1>Welcome!</h1>
                <p>Please provide your information below.</p>
                <form onSubmit={this.props.getData}>
                    <input type="text" placeholder="firstName" name="firstName" />
                    <input type="text" placeholder="lastName" name="lastName" />
                    <input type="text" placeholder="phoneNumber" name="phoneNumber" />
                    <input type="text" placeholder="emailAddress" name="emailAddress" />
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </>
        )
    }
}



export default MoreData
