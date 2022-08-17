import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const styles = {
    minHeight: '600px',
};

const App = () => {
    return (
        <Router>
            <Header></Header>
            <div className='container' style={styles}>
                <Route path='/' exact={true} component={Home} />
                <Route path='/movies' component={MovieList} />
                <Route path='/details' component={MovieDetails} />
            </div>
            <Footer />
        </Router>
    );
};

export default App;

/*
npm uninstall react-router-dom
npm install react-router-dom@^5.0.0
*/
