import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="container">
      <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
      </div>
    </div>
  );
}

export default Sidebar;
