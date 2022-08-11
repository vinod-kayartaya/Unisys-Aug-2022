import React, { Component } from 'react';

export class Header extends Component {
    render() {
        const { title, subtitle } = this.props;
        return (
            // .alert.alert-primary>.container>h1{React basics}
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>{title}</h1>
                    <p>&#123;{subtitle}&#125;</p>
                </div>
            </div>
        );
    }
}

export default Header;
