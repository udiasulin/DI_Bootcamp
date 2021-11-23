import React from 'react';
import '../style.css'
import '../MyComponent.css'

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a Header</h1>
                <p>This is a Paragraph</p>
                <a>This is a link</a>
                <h1>this is aform</h1>
                <form>
                    <label>Enter your name:</label>
                    <input type="text" />
                    <button>Submit</button>
                </form>
                <h1>Here is an image:</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" />
                <h2>This is alist</h2>
                <ul>
                    <li>Coffe</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
                <h1 className="title">Hello Style!</h1>
                <h1 className="secondTitle title">Hello Style!</h1>
                <h1 style={{
                    color: 'white',
                    backgroundColor: 'dodgerblue',
                    padding: '10px',
                    fontFamily: 'Arial'
                }}>
                    Hello Style!
                </h1>
                <button style={{
                    color: 'yellow',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: '1px solid yellow',
                    backgroundColor: 'black',
                    padding: '5px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    margin: '10px'
                }}>
                    I'm stylish button!
                </button>
                <h1 className="newStyle">Hello style!</h1>
            </div >
        )
    }
}

export default MyComponent


