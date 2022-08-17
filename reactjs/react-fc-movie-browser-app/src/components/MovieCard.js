import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const history = useHistory();

    return (
        <>
            <div
                style={{ cursor: 'pointer' }}
                className='card'
                onClick={() => history.push('/details?imdbID=' + movie.imdbID)}
            >
                <div className='card-body'>
                    <h5 className='card-title text-primary'>{movie.Title}</h5>
                    <p className='lead'>
                        {movie.Type} - {movie.Year}
                    </p>
                </div>
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className='card-img-top'
                />
            </div>
        </>
    );
};

export default MovieCard;
