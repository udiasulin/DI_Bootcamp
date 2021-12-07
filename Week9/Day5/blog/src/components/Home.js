import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { posts } = this.props;
        return (
            <>
                {posts.length > 0 ? posts.map(data =>
                    <Link to={'/' + data.id} key={data.id}>
                        <div className="col s12 m7">
                            <div className="card horizontal">
                                <div className="card-stacked">
                                    <h5 className="header red-text">{data.title}</h5>
                                    <div className="card-content">
                                        <p>{data.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : <p>No posts Exsits</p>
                }
            </>
        )



    }

}

const mapStateToProps = (state) => {
    console.log(state)

    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
