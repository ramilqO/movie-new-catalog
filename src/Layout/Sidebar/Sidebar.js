import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  return (
  <div className='Sidebar col-2'>
    <div className="container">
      <ul class="nav">
        <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="/localhost">Сортировать по году</a>
        </li>
        <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Сортировать по жанру</a>
        </li>
        <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Сортировать по рейтингу</a>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Sidebar;
