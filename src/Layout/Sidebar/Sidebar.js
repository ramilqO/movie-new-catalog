import React from 'react';
import "./Sidebar.css";



const Sidebar = () => {
    return (
        <div className='Sidebar col'>
            <div className="container">
      <ul className="nav">
        <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/localhost">Главная</a>
        </li>
        <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/localhost">Избранное</a>
        </li>
      </ul>
          </div>
        </div>
    );
}

export default Sidebar;