import './App.css';
import React from 'react';
import MovieList from './components/MovieList'

class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <>
                <MovieList />
            </>
        )
    }
}

export default App;
