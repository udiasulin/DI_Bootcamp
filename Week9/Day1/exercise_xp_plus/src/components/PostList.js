import React from 'react';
import data from '../data.json';

class PostList extends React.Component {

    render() {

        return data.map((data, key) => {
            return (
                <>
                    <div key={data.id}>
                        <h1 key={data.title}>{data.title}</h1>
                        <p key={data.content}>{data.content}</p>
                    </div>
                </>
            )
        })
    }
}

export default PostList;
