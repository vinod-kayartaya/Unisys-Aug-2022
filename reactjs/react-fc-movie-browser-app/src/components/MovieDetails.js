import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const MovieDetails = () => {
    const location = useLocation();
    const history = useHistory();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        // const fn1 = (async () => {})
        // fn1();
        // OR
        // (async () => {})();
        // the above statement is a.k.a IIFE (immediately invoked function expression)

        (async () => {
            const { imdbID } = queryString.parse(location.search);
            const url = `http://omdbapi.com/?i=${imdbID}&apikey=3bc3c88f`;

            const resp = await axios.get(url);
            setMovie(resp.data);
        })();
    }, [location]); // execute the callback when "location" changes

    return (
        <>
            {!movie.Title && (
                <div className='text-center'>
                    <img
                        alt='loading...'
                        style={{ height: '150px' }}
                        src='https://i.stack.imgur.com/kOnzy.gif'
                    />
                </div>
            )}

            {movie.Title && (
                <>
                    <div className='row'>
                        <div className='col-4'>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className='img-thumnail'
                            />
                        </div>
                        <div className='col-8'>
                            <h1>{movie.Title}</h1>
                            <table className='table table-hover'>
                                <tbody>
                                    <tr>
                                        <td>Plot</td>
                                        <td>{movie.Plot}</td>
                                    </tr>
                                    <tr>
                                        <td>Actors</td>
                                        <td>{movie.Actors}</td>
                                    </tr>
                                    <tr>
                                        <td>Ratings</td>
                                        <td>
                                            <ul>
                                                {movie.Ratings.map((mr) => (
                                                    <li>
                                                        {mr.Source}: {mr.Value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <button
                                onClick={() => history.go(-1)}
                                className='btn btn-primary'
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MovieDetails;
