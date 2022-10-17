import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../../routes/Home';
import Favorites from '../../routes/Favorites'; 

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light">
        <Home />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default Content;

