import React from 'react';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let gender;

        if (this.props.male) {
            gender = 'male'
        } else if (this.props.female) {
            gender = 'female'
        }
        
        return (
            <>
                <div>
                    <h1>Entered information:</h1>
                    <p>Your name: {this.props.firstName}</p>
                    <p>Your last name: {this.props.lastName}</p>
                    <p>Your age: {this.props.age}</p>
                    <p>Your gender: {gender}</p>
                    <p>Your destination: {this.props.destination}</p>
                    <h2>Your dietary restrictions: </h2>
                    <p>Nuts free:{this.props.nutsFree ? 'yes' : 'no'}</p>
                    <p>Lactose free:{this.props.lactosFree ? 'yes' : 'no'}</p>
                    <p>Vegan meal:{this.props.vegan ? 'yes' : 'no'}</p>
                </div>
            </>
        )
    }

}

export default FormComponent