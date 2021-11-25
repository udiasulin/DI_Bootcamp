import './App.css';
import React from 'react';
import FormComponent from './components/FormComponent '

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: null,
            female: false,
            male: false,
            destination: '',
            nutsFree: false,
            lactosFree: false,
            vegan: false
        }
    }

    handleChange = (e) => {
        this.setState({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            age: document.getElementById('age').value,
            female: document.getElementById('female').checked,
            male: document.getElementById('male').checked,
            destination: document.getElementById('destination').value,
            nutsFree: document.getElementById('nutsFree').checked,
            lactosFree: document.getElementById('lactosFree').checked,
            vegan: document.getElementById('vegan').checked,
        })


    }
    uncheckFemale = () => {
        document.getElementById('female').checked = false

    }

    uncheckMale = () => {
        document.getElementById('male').checked = false

    }
    

    render() {
        return (
            <>
                <div className='container'>
                    <form onChange={this.handleChange}>
                        <input type="text" name="firstName" placeholder="First Name" id="firstName" />
                        <input type="text" name="lastName" placeholder="Last Name" id="lastName" />
                        <input type="number" name="age" placeholder="Age" id="age" />
                        <input type="checkbox" name="male" id="male" onClick={this.uncheckFemale}/>
                        <label htmlFor="male">male</label>
                        <input type="checkbox" name="female" id="female" onClick={this.uncheckMale}/>
                        <label htmlFor="female">female</label>

                        <select id="destination">
                            <option>Please Choose a destination</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Japan">Japan</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                        <p>Dietary restrictions</p>

                        <input type="checkbox" name="nutsFree" id="nutsFree" />
                        <label htmlFor="nutsFree">Nuts free</label>
                        <input type="checkbox" name="lactosFree" id="lactosFree" />
                        <label htmlFor="lactosFree">Lactose free</label>
                        <input type="checkbox" name="vegan" id="vegan" />
                        <label htmlFor="vegan">Vegan</label>
                    </form>
                </div>
                <FormComponent firstName={this.state.firstName} lastName={this.state.lastName}
                    age={this.state.age} male={this.state.male} female={this.state.female}
                    destination={this.state.destination} nutsFree={this.state.nutsFree} lactosFree={this.state.lactosFree}
                    vegan={this.state.vegan} />
            </>
        )

    }
}


export default App;
