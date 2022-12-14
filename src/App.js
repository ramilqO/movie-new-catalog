import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './layout/Navbar';
import Content from './layout/Content';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

