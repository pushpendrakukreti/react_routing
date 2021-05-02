import React, { Component } from "react";
import axios from "axios";

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(result => {
                // console.log(result);
                const moviesList = result.data;
                this.setState({ movies: moviesList })
                console.log(this.state.movies);
            })
            .catch(error => console.log('Error : ' + error))
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-hover text-center" style={{width:'70%'}}>
                    <thead>
                        <th>Title</th>
                        <th>Producer</th>
                        <th>Release On</th>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie,key) => {
                            return (
                                <tr key={key}>
                                    <td>{movie.title}</td>
                                    <td>{movie.producer}</td>
                                    <td>{movie.release_date}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MovieList;