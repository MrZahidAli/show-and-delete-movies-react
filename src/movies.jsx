
import React, { Component, Fragment } from 'react';
import { getMovies } from "../src/services/fakeMovieService";
class Movies extends Component {
    state = {
        movies: getMovies(),
        moviesCount: 0,
        obAr: [],
        indexDelete: 0
    }
    deleteMovie = (e) => {

        this.setState(this.state.movies.splice(e.target.id, 1));
        this.setState(this.state.obAr.splice(e.target.id, 1));
        console.log(e.target.id);
    };
    render() {
        return (
            <div>
                {this.moviesDetail()}
                <h2 style={{ marginLeft: 350, marginTop: 50 }}>Showing {this.state.moviesCount} movies in the database</h2>
                {this.emptyMovies()}
            </div>
        );
    }
    moviesDetail = () => {
        let lent = 0;
        for (let _len of this.state.movies) {
            this.state.indexDelete = lent;
            this.state.obAr[lent] =
                <tr>
                    <td>{this.state.movies[lent].title}</td>
                    <td>{this.state.movies[lent].genre.name}</td>
                    <td>{this.state.movies[lent].numberInStock}</td>
                    <td>{this.state.movies[lent].dailyRentalRate}</td>
                    <button id={lent} onClick={this.deleteMovie} className="btn btn-primary">Delete</button>
                </tr>;
            lent++;
        }
        this.state.moviesCount = lent;
    };
    emptyMovies() {
        return this.state.moviesCount === 0 ? <h1 style={{ color: 'red', marginLeft: 400 }}>There is no Movies to Show</h1> :
            <table className="table" style={{ margin: 40, marginLeft: 300 }}>
                <thead style={{}}>
                    <tr style={{ fontSize: 23, color: "blue" }}>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.obAr}
                </tbody>
            </table>;
    };
}

export default Movies;