import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const Movie = ({id, title, year, summary, poster}) => {
    return (
<div className='Movie border rounded col-lg-4 col-md-6 col-sm-12 mr-2' id={id} >
    <img className="card-img-top" src={poster} alt={title} />
    <div className="container">
        <h5 className="card-title">{title}</h5>
        <div className="card-body">
        {/* <p className="card-text">{summary}</p> */}
        <div class="card-footer text-muted">{year}</div>
        <a href="/localhost" className="btn btn-primary">Смотреть</a>
        </div>
    </div>  
</div>
)}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
