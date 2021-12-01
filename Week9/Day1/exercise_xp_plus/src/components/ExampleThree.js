import React from 'react';
import data from '../socialData.json';

class ExampleThree extends React.Component {

    render() {
        return data.Experiences.map((data, key) => {
            return (
                <>
                    <div key={key}>
                        <img src={data.logo} alt="logo" />
                        <a href={data.url}>{data.companyName}</a>
                        {data.roles.map((data, index) => {
                            return (
                                <>
                                    <p key={data.title}>{data.title}</p>
                                    <p key={data.startDate}>{data.startDate} {data.location}</p>
                                </>
                            )
                        })}
                    </div>
                </>
            )
        })
    }
}

export default ExampleThree;
