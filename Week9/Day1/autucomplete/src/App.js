import './App.css';
import data from '../Countries'
class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(data)
        return (
            <>
                <div>
                    <h1>Auto Complete</h1>
                    <input type="text" />
                    <p>Suggestions:</p>
                </div>
            </>
        )
    }

}

export default App;
