import React from "react";

class UserData extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" placeholder="Title" name="title" />
                    <input type="text" placeholder="Author" name="author" />
                    <input type="text" placeholder="Genre" name="genre" />
                    <input type="text" placeholder="Year Published" name="yearPublished" />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}


export default UserData
