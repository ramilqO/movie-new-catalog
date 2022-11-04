import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './Components Content/Home';
import MovieList from './Components Content/MovieList/MovieList';
import Favorites from './Components Content/Favorites';
import NotFound from './Components Content/NotFound/NotFound';

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light col-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/list" element={<MovieList />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    );
  }
}

export default Content;

