import React, { Component } from "react";
import axios from "axios";

import Carousell from "../../../Components/Carousel";
// import Movie from "../../../Components/Movie/Movie";

class Home extends Component {

    state = {
        isLoaded: false,
        movies: [],
      }

      getMovies = async () => {
        const {
          data: { data:
            { movies }
          }
        } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=${this.state.sortBy}`);
    
        this.setState({ movies: movies, isLoaded: true });
      }

      componentDidMount() {
        this.getMovies();
      }

    //   renderSlider = () => {

    //   }

    render() {
        return (
            <div>
                <h1>I am home page! I'm in development and i will have all the width of the content</h1>
                <Carousell></Carousell>
            </div>
        )
    }
}

export default Home;