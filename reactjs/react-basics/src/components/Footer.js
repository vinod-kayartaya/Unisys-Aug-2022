import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        const { year, company } = this.props;

        return (
            <div className='text-center'>
                &copy; {year} - All rights reserved by {company}.
            </div>
        );
    }
}

export default Footer;
