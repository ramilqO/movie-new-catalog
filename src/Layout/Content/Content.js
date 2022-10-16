import React, { Component } from 'react';

// import { HashRouter, Route } from 'react-router-dom';

import Home from '../../routes/Home';
// import Favorites from '../../routes/Favorites'; 

class Content extends Component {
  render() {
    return (
      <div className="Content border bg-light">
        <Home />
        {/* <HashRouter>
          <Route path="/">
            <h1>Главная страница</h1>
          </Route>
          <Route path="/favorites">
            <h1>Избранное</h1>
          </Route>
        </HashRouter> */}
      </div>
    );
  }
}

export default Content;

