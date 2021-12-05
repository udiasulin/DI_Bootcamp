import React from 'react';
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <TransactionForm />
                <TransactionList />
            </>
        )
    }
}


export default App