import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../../routes/Home';
import Favorites from '../../routes/Favorites'; 

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light">
        {/* <Home /> */}
        {/* <BrowserRouter>
          <Link to="Favorites">Favorites</Link>
          <Routes>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default Content;

