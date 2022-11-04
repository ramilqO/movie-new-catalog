import React, { Component } from 'react';
import axios from "axios";

import Movie from "../../../../Components/Movie/Movie";
import Loader from "../../../../Components/Loader";


import "./MovieList.css";

class MovieList extends Component {
  
  state = {
    isLoaded: true,
    movies: [],
    sortBy: "rating"
  }

  getMovies = async () => {
    const {
      data: { data:
        { movies }
      }
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=${this.state.sortBy}`);

    this.setState({ movies: movies, isLoaded: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  renderMovies = () => {
    const { movies } = this.state;

    return (
      <div className='movie__list'>
        <div className="container d-flex">
          {movies.map(movie => <Movie
            title={movie.title}
            summary={movie.summary}
            year={movie.year}
            poster={movie.medium_cover_image}
            id={movie.id}
            key={movie.id + 1}
            rating={movie.rating}
          />)}
        </div>
      </div>
    )
  }

  renderFunc = () => {
    const { isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div className='loader text-center'>
          <Loader />
        </div>
      )
    } else {
      return this.renderMovies();
    }
  }

  sortByYear = () => {
    this.setState({ sortBy: "year" })
    this.getMovies();
  }

  sortByGenre = () => {
    this.setState({ sortBy: "genre" })
    this.getMovies();
  }

  sortByRating = () => {
    this.setState({ sortBy: "rating" })
    this.getMovies();
  }

  render() {
    return (
      <div className='p-3'>
        <h1>Каталог</h1> <hr />
        <div className='movie__list'>
          <div className="container">
            <ul className="nav">
              <li className='nav-item m-3'>
                <button className="btn btn-success" aria-current="page" onClick={this.sortByYear}>Сортировать по году</button>
              </li>

              <li className="nav-item m-3">
                <button className="btn btn-success" aria-current="page" onClick={this.sortByGenre}>Сортировать по жанру</button>
              </li>

              <li className="nav-item m-3">
                <button className="btn btn-success" aria-current="page" onClick={this.sortByRating}>Сортировать по рейтингу</button>
              </li>
            </ul>
          </div>
        </div>

        <div>{this.renderFunc()}</div>

      </div>
    );
  }
}

export default MovieList;
