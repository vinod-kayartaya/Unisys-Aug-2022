import React, { Component } from 'react';

export class MovieDetails extends Component {
    render() {
        const m = this.props.selectedMovie || {};

        return (
            <>
                {m.Title && (
                    <>
                        <img
                            src={m.Poster}
                            alt={m.Title}
                            className='img-thumbnail img-responsive'
                        />
                        <h2>{m.Title}</h2>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Year</td>
                                    <td>{m.Year}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{m.Type}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </>
        );
    }
}

export default MovieDetails;
