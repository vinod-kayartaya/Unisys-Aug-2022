import React, { Component } from 'react';
import MovieItem from './MovieItem';

export class MovieList extends Component {
    render() {
        const { movies, setSelectedMovie } = this.props;

        const movieItems =
            movies &&
            movies.map((movie) => (
                <MovieItem
                    key={movie.imdbID}
                    movie={movie}
                    setSelectedMovie={setSelectedMovie}
                />
            ));

        return (
            <>
                {movieItems ? (
                    <ul className='list-group'>{movieItems}</ul>
                ) : (
                    <h3 className='text-warning'>No movies found!</h3>
                )}
            </>
        );
    }
}

export default MovieList;
