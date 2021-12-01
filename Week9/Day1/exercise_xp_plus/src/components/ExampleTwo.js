import React from 'react';
import data from '../socialData.json';

class ExampleTwo extends React.Component {
    constructor() {
        super();
    }
    render() {
        return data.Skills.map((data, key) => {
            return (
                <>
                    <ul key={key}>
                        <h1 key={data.Area}>{data.Area}</h1>
                        {data.SkillSet.map((data, index) => {
                            return (<li key={data.Name}>{data.Name}</li>)
                        })}

                    </ul>
                </>
            )
        })
    }
}

export default ExampleTwo;
