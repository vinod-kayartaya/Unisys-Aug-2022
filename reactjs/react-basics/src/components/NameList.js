import React, { Component } from 'react';

export class NameList extends Component {
    // lifecycle of this variable is managed by React
    // and the changes to this variable via this.setState(..) re-renders the
    // component
    state = {
        names: ['Vinod', 'Shyam', 'Naveen', 'Harish'],
    };

    // this is just another member variable, has nothing to do with
    // the component's re-rendering
    author = {
        name: 'Vinod',
        email: 'vinod@vinod.co',
    };

    render() {
        // array of JSX elements
        // const namesLi = [
        //     <li key='a'>Vinod</li>,
        //     <li key='b'>Shyam</li>,
        //     <li key='c'>Naveen</li>,
        //     <li key='d'>Harish</li>,
        // ];

        // The same thing can be achieved using the map function of an array.
        // Here, this.state.map(..) returns an array of JSX elements.
        const namesLi = this.state.names.map((name, index) => (
            <li key={index}>{name}</li>
        ));

        return (
            <>
                <p>
                    This is a sample app created by{' '}
                    <a href={'mailto:' + this.author.email}>
                        {this.author.name}
                    </a>
                </p>
                <h3>List of names</h3>
                <ul>{namesLi}</ul>
            </>
        );
    }
}

export default NameList;
