import './App.css';
import React from 'react';
import PostList from './components/PostList';
import ExampleOne from './components/ExampleOne';
import ExampleTwo from './components/ExampleTwo';
import ExampleThree from './components/ExampleThree';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        };
    }


    postData = async () => {
        const requestOptions = {
            Accept: "application/json",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27})
        }

        try {
            const response = await fetch('https://webhook.site/527d4bb1-dcaf-488d-9b94-524b9aff6832', requestOptions);
            console.log(response)
            const json = await response.json();

        } catch (e) {
            return e;
        }
    }
    render() {
        console.log(this.postData())
        return (
            <>
                {/* <PostList />
                <ExampleOne />
                <ExampleTwo />
                <ExampleThree /> */}

                <button onClick={this.postData}>Send</button>

            </>
        )
    }
}


export default App;
