import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

const Movie = ({ id, title, year, summary, poster, rating }) => {
    return (
        <div className='Movie bg-dark text-light border border-dark rounded col-lg-4 col-md-6 col-sm-12 mr-2' id={id} >
            <img className="card-img-top rounded" src={poster} alt={title} />
            <div className="container d-block p-3">
                <h5 className="card-title left">{title}</h5>
                <div className="card-body">
                    <div className="card-footer text-muted">{year}</div>
                    <hr />
                    <p className='summary text-muted'>{summary.slice(0, 70)}...</p>
                    <hr />
                    <button className="btn btn-success">Смотреть</button>
                </div>
            </div>

        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default Movie;
