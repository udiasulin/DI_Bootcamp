import data from '../Countries'

class AutoCompleteText extends React.Component {
    constructor() {
        super();
    }

    render() {
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

export default AutoCompleteText;
