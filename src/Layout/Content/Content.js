import MovieList from "../../Components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="Content border border-dark bg-light">
        <MovieList/>
      </div>
    );
  }
}

export default Content;

