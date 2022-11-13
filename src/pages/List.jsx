import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import { Container, NavDropdown } from 'react-bootstrap';


const List = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, fillMovies] = useState([]);
    // const [sortByRating, sortByRatingFunc] = useState('rating');
    // const [sortByYear, sortByYearFunc] = useState('year');
    // const [sortByGenre, sortByGenreFunc] = useState('genre');




    const getMovies = async () => {
        const {
            data: { data:
                { movies }
            }
        } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);

        setIsLoaded(true);
        fillMovies(movies);
    }

    useEffect(() => {
        getMovies();
         console.log("useeffect!!!");
    }, []);

    const renderMovies = () => {
        return (
            movies.map(movie => <Movie
                title={movie.title}
                summary={movie.summary}
                year={movie.year}
                poster={movie.large_cover_image}
                id={movie.id}
                key={movie.id + 1}
            />)
        );
    }

    const renderFunc = () => {
        if (isLoaded) {
            return renderMovies();
        } else {
            return <h1>Loading...</h1>;
        }
    }

    return (
        <div>
            <NavDropdown title="Сортировать по" id="collasible-nav-dropdown" style={{ display: "block", textAlign: "center", maxHeight: "10vh", margin: "10px" }}>
                <NavDropdown.Item>Рейтингу</NavDropdown.Item>
                <NavDropdown.Item>Году</NavDropdown.Item>
                <NavDropdown.Item>Жанру</NavDropdown.Item>
             </NavDropdown>

            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {renderFunc()}
            </Container>
        </div>
    );
}

export default List;
