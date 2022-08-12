import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

export class App extends Component {
    state = {
        movies: localStorage['movies']
            ? JSON.parse(localStorage['movies'])
            : [],
        selectedMovie: localStorage['selectedMovie']
            ? JSON.parse(localStorage['selectedMovie'])
            : undefined,
    };

    searchMovies = async (searchText) => {
        const url = `http://omdbapi.com/?s=${searchText}&apikey=aa9e49f`;
        const resp = await fetch(url);
        const data = await resp.json();
        localStorage['movies'] = JSON.stringify(data.Search);
        this.setState({ ...this.state, movies: data.Search });
    };

    setSelectedMovie = (movie) => {
        localStorage['selectedMovie'] = JSON.stringify(movie);
        this.setState({ ...this.state, selectedMovie: movie });
    };

    render() {
        return (
            <>
                <Header searchMovies={this.searchMovies} />

                <div className='container'>
                    <div className=' row'>
                        <div className='col-6'>
                            <MovieList
                                movies={this.state.movies}
                                setSelectedMovie={this.setSelectedMovie}
                            />
                        </div>
                        <div className='col-6'>
                            <MovieDetails
                                selectedMovie={this.state.selectedMovie}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
