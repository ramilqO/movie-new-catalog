import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import { Container, NavDropdown } from 'react-bootstrap';

const List = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [sortBy, changeSorting] = useState('rating');

    const getMovies = async () => {
        const {
            data: { data:
                { movies }
            }
        } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}`);

        setIsLoaded(true);
        setMovies(movies);
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
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <div style={{ height: "50px" }}>
                    <NavDropdown title="Сортировать по" id="collasible-nav-dropdown" style={{ display: "flex", textAlign: "center", margin: "10px" }}>
                        <NavDropdown.Item onClick={() => {changeSorting('rating'); getMovies();}}>Рейтингу</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {changeSorting('year'); getMovies();}}>Году</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {changeSorting('genre'); getMovies();}}>Жанру</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>

            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {renderFunc()}
            </Container>
        </div>
    );
}

export default List;
