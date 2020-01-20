import React, { Component, Fragment } from 'react';
import { getMovies } from "../src/services/fakeMovieService";
class deleteMovies extends Component {
    state = {
        movies: getMovies()
    }
    delMovies = movie => {
        const movies = this.state.movies.filter(m => movie._id !== m._id);
        this.setState({ movies: movies });
    }
    render() {
        const count = this.state.movies.length;
        return count === 0 ? <p> Database is empty....</p> :
            <React.Fragment>
                <p>Showing {count} Movies from database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    {this.state.movies.map(movies => {
                        return <tbody>
                            <tr>
                                <td>{movies.title}</td>
                                <td>{movies.genre.name}</td>
                                <td>{movies.numberInStock}</td>
                                <td>{movies.dailyRentalRate}</td>
                                <button onClick={() => this.delMovies(movies)} className='btn btn-danger btn-sm'>Delete</button>
                            </tr>
                        </tbody>
                    })}
                </table>
            </React.Fragment>
    }
}

export default deleteMovies;
