import React from 'react';
import data from '../socialData.json';

class ExampleOne extends React.Component {

    render() {
        return data.SocialMedias.map((data, key) => {
            return (
                <>
                    <ul>
                        <li key={data}>{data}</li>
                    </ul>
                </>
            )
        })
    }
}

export default ExampleOne;
