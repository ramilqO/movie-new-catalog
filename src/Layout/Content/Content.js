import MovieList from "../../Components/MovieList/MovieList";

import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light">
        <MovieList/>
      </div>
    );
  }
}

export default Content;

