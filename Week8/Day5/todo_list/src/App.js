import React from 'react';
import FormCompoent from './components/FormCompoent';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="App">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center mb-4 text-primary">Todos</h1>
                        <FormCompoent />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
