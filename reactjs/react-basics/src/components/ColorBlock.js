import React, { useState } from 'react';
// a function based component is just a regular function (or an arrow function) that returns a JSX.
// Since it is a not a class inheriting from Component class, you cannot use "state" and "setState",
// hence it is also known as a Stateless component. In order to use the concept of state in a stateless
// components, we can use react hooks.

export const ColorBlock = () => {
    console.log('ColorBlock is rendered at', new Date());

    // the return value from the function useState is an array of 2 elements
    // we generally use array destructuring to collect them into individual variables.
    // The first element in the array represents a state, and the second one represents a method
    // that can change the state. Hence we generally use [xyz, setXyz] as the variables

    let [bgColor, setBgColor] = useState('pink');

    const changeColor = (newColor) => {
        // bgColor = newColor; // do not mutate the state like this, use the setter
        setBgColor(newColor);
        console.log('changing color to', newColor);
    };

    return (
        <div>
            <div
                style={{
                    display: 'inline-block',
                    width: '235px',
                    height: '235px',
                    border: '1px dashed #999',
                    backgroundColor: bgColor,
                }}
            ></div>
            <br />
            <button
                onClick={() => changeColor('blue')}
                className='btn btn-primary'
            >
                Blue
            </button>
            <button
                onClick={() => changeColor('green')}
                className='btn btn-success'
            >
                Green
            </button>
            <button
                onClick={() => changeColor('red')}
                className='btn btn-danger'
            >
                Red
            </button>
            <button
                onClick={() => changeColor('yellow')}
                className='btn btn-warning'
            >
                Yellow
            </button>
        </div>
    );
};

export default ColorBlock;
