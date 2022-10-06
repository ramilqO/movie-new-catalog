import React, {Component} from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Content from './Layout/Content/Content';
import Navbar from './Layout/Navbar/Navbar';
import Sidebar from './Layout/Sidebar/Sidebar';

class App extends Component {

  render() {
    return(
      <div className='App'>
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    )
  }
}


export default App;