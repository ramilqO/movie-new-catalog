import React, { Component } from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from '../../routes/Home';
import Favorites from '../../routes/Favorites'; 

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light">
          <Routes>

            <Route path="/favorites" element={<Favorites />} />
            <Route path="/home" element={<Home />} />

          </Routes>
      </div>
    );
  }
}

export default Content;

