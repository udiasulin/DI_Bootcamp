import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostAction';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
      }
    render() {

        const post = this.props.post ? (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)