import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toolbar } from './Toolbar';
import { Header } from './Header';

// A functional component is just a function that returns JSX.
// This is equivalent of the render() method of the class based component.
// Since this is not a class, we cannot use "this" for accessing props, state or refs.
// This can also be an arrow function.
function App() {
    console.log('App() is called');
    // the useState() method returns an array of 2 elements; data and a setter for the data.
    // the setter must be used if you wish to change the value of the data (i.e, count).
    let [count, setCount] = useState(0);

    // this is a signal to the react to render this component again.
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <Header />
            <div className='container'>
                <h3>Count is {count}</h3>
                <Toolbar {...{ increment, decrement }} />
            </div>
        </>
    );
}

export default App;
