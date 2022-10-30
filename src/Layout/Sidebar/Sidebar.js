import React from 'react';
import "./Sidebar.css";
import {Link} from "react-router-dom";


const Sidebar = () => {

 
    return (
        <div className='Sidebar col'>
            <div className="container">
      <ul className="nav">
        <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/home">Главная</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/favorites">Избранное</Link>
        </li>
      </ul>
          </div>
        </div>
    );
}

export default Sidebar;