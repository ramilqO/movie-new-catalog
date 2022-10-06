import React, { Component } from 'react';
import axios from "axios";

import Movie from "./Movie/Movie";
import "./MovieList.css";

class MovieList extends Component {
    state = {
        isLoaded: true,
        movies: [],
        sortBy: "rating"
      }

      getMovies = async () => {
        const {
          data: {data:
               {movies}
              }
          } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=${this.state.sortBy}`);
    
        this.setState({movies: movies, isLoaded: false});
      }
    
      componentDidMount() {
        this.getMovies();
      }
    
      renderMovies = () => {
        const {movies} = this.state;
    
        return(
          <div className='movie__list'>
          <div className="container d-flex">
              {movies.map(movie => <Movie
                title={movie.title}
                summary={movie.summary}
                year={movie.year}
                poster={movie.medium_cover_image}
                id={movie.id}
                key={movie.id}
              />)}
          </div>
        </div>
          )
      }
    
    
      renderFunc = () => {
        const {isLoaded} = this.state;
    
        if(isLoaded) {
          return(
            <div className='loader'>
              <span>Загрузка...</span>
            </div>
          )
        }  else {
                return this.renderMovies();
        }
      }
    
    render() {
        return (
            <div>
                {this.renderFunc()}
            </div>
        );
    }
}

export default MovieList;
