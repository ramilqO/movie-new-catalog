import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import axios from 'axios';
import {Placeholder} from 'react-bootstrap';

function UncontrolledExample() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const request = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        let movies = request.data.data.movies;
        
        setMovies(movies.slice(10));
    }

    getMovies();

  return (
    <Carousel className="col-sm-0">
      
      {movies.map((movie, index) => 
      <Carousel.Item key={index + 1} className='h-100'>
        <img
          className="d-block w-100 h-100"
          src={movie.background_image_original}
          alt="title"
        />

        <Carousel.Caption>
          <h3 className=''>{movie.title.slice(0, 20)}</h3>
          <p>
            {movie.summary.slice(0, 100) ||
            <>
            <Placeholder as={Carousel.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
            <Placeholder as={Carousel.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
            </>
            }
          </p>
        </Carousel.Caption>
      </Carousel.Item>)}
      

    </Carousel>
  );
}

export default UncontrolledExample;