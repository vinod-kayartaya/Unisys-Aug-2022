import React, { Component } from 'react';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import ColorBlock from './components/ColorBlock';
import NameList from './components/NameList';

// any JS class that extends "Component" class from react is a react component
// It must implement/override the render() method, which should return a JSX
export class App extends Component {
    render() {
        const title = 'React Basics';
        const footerProps = {
            year: 2020,
            company: 'Acme India',
        };
        return (
            <div>
                <Header title={title} subtitle='Learning React is fun' />
                <div className='container fixed-height-600'>
                    <Counter />
                    <hr />
                    <ColorBlock />
                    <hr />
                    <NameList />
                </div>
                <Footer {...footerProps} />
            </div>
        );
    }
}

export default App;
