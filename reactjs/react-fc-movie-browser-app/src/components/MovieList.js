import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

import MovieCard from './MovieCard';

const MovieList = () => {
    const location = useLocation();
    const [moviesData, setMoviesData] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [page, setPage] = useState(1);

    // useEffect takes 2 params:
    // 1) callback method to be executed after the component is rendered and/or value of deps changes
    // 2) list of dependencies
    useEffect(() => {
        const { searchText } = queryString.parse(location.search);
        const url = `http://omdbapi.com/?s=${searchText}&apikey=3bc3c88f`;

        axios
            .get(url)
            .then((resp) => resp.data)
            .then((data) => {
                setMoviesData(data.Search);
                setTotalMovies(data.totalResults);
            });
    }, [location]);

    // callback to be executed when "Load more..." button is clicked (state "page" changes)
    useEffect(() => {
        const { searchText } = queryString.parse(location.search);
        const url = `http://omdbapi.com/?s=${searchText}&apikey=3bc3c88f&page=${page}`;

        axios
            .get(url)
            .then((resp) => resp.data)
            .then((data) => setMoviesData([...moviesData, ...data.Search]));
    }, [page]);

    const moviesJsx = moviesData.map((m) => (
        <div key={m.imdbID} className='col-md-4 col-sm-6 col-xs-12'>
            <MovieCard movie={m} />
        </div>
    ));

    return (
        <>
            <p className='lead'>Found {totalMovies} movies/tv-shows</p>
            <div className='row'>
                {moviesJsx}
                <div
                    className='col-md-3 col-sm-6 col-xs-12 text-center'
                    style={{ paddingTop: '250px' }}
                >
                    <button
                        className='btn btn-secondary'
                        onClick={() => setPage(page + 1)}
                    >
                        Load more...
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieList;
