import React from 'react';
import "./Sidebar.css";
import { Link } from "react-router-dom";

import {AiFillFire} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import {BsFillGrid1X2Fill} from "react-icons/bs";



const Sidebar = () => {
  return (
    <div className='Sidebar col'>
      <div className="container">
        <ul className="nav">
          <li className="sidebar-item" to="/home">
          <AiFillFire className='icon' /> <Link className="nav-link text-dark" aria-current="page" to="/home">Главная</Link>
          </li>
          <li className="sidebar-item" to="/favorites">
            <AiFillStar className='icon' /><Link className="nav-link text-dark" aria-current="page" to="/favorites">Избранное</Link>
          </li>

          <li className="sidebar-item d-flex" to="/list">
            <BsFillGrid1X2Fill className='icon' /><Link className="nav-link text-dark" aria-current="page" to="/list">Каталог</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;