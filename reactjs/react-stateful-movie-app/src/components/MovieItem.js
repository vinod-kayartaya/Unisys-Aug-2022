import React, { Component } from 'react';
import './MovieItem.css';

export class MovieItem extends Component {
    render() {
        let { movie, setSelectedMovie } = this.props;

        return (
            <>
                <div
                    className='row alert alert-secondary'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedMovie(movie)}
                >
                    <div className='col-3'>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className='img-box img-thumbnail'
                        />
                    </div>
                    <div className='col-9'>
                        <h3>{movie.Title}</h3>
                        <p className='lead mt-4'>
                            {movie.Year} - {movie.Type}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieItem;
