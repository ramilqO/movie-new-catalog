import Movie from '../components/Movie';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

import Particle from '../components/Particle';

const Favorites = () => {

    const getFavoritesMovies = () => {
        return JSON.parse(localStorage.getItem('favorites')) || []; //берем избранные фильмы из массива
    }

    useEffect(() => {
        getFavoritesMovies();
        console.log("useeffect!!!");
    }, []);

    const checkFavorites = () => {

        if (getFavoritesMovies().length === 0) {
            return (
                <>
                    <h1 className='text-light'>Вы пока что не добавляли никаких фильмов в избранное</h1>
                    <Particle />
                </>
            );
        } else {
            return (
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {getFavoritesMovies().map((movie, index) => <Movie
                        title={movie.title}
                        summary={movie.summary}
                        year={movie.year}
                        poster={movie.poster}
                        id={movie.id}
                        index={index}
                        key={movie.id + index}
                        rating={movie.rating}
                        torrents={movie.torrents}
                        genres={movie.genres}
                        isFavorite
                    />)}
                </Container>);
        }
    }

    return (
        checkFavorites()
    )
}

export default Favorites;
