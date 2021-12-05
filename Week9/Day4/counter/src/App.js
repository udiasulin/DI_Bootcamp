import './App.css';
import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <h1>Counter</h1>
                <Counter />
            </>
        )
    }
}

export default App;
