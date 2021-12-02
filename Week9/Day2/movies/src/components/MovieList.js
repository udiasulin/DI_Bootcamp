import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails'

class MovieList extends React.Component {
    constructor() {
        super();
    }

    handleClick = (data) => {
        this.props.getCurrentMovie(data)
    }

    render() {
        return (
            <>
                <h1>Movie List</h1>
                <ul>
                    {this.props.moviesArr.map((data) => <li key={data.title}>{data.title} <button onClick={() => { this.handleClick(data) }}>Details</button></li>)}
                </ul>
                <MovieDetails pickedMovie={this.props.currentMovie} />
            </>
        )
    }

}

const mapStateToProps = state => {
    return state

}

const mapDispacthToProps = dispatch => {
    return {
        getCurrentMovie: (data) => dispatch({ type: 'MOVIE_SELECTED', currentMovie: data })
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(MovieList);
