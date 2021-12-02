import React from 'react';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.pickedMovie === undefined) {
            return (
                <p>Pick Movie</p>
            )
        }
        const movie = this.props.pickedMovie;
        console.log(movie)
        return (
            <>
                <h1>Movie</h1>
                <p>{movie.title}</p>
                <p>{movie.releaseDate}</p>
                <p>{movie.rating}</p>
            </>
        )
    }
}

export default MovieDetails;
