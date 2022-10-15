import React from 'react';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className="nav navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/localhost">Movie List</a>
                    <form className="d-flex">
                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                         <button className="btn btn-outline-success" type="submit">Search</button>
                     </form>
                 </div>
            </nav>
        </div>
    );
}

export default Navbar;
