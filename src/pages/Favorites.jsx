import Movie from '../components/Movie';

import { Container } from 'react-bootstrap';



const Favorites = () => {        

    const getFavoriteMovies = () => {
        return JSON.parse(localStorage.getItem('favorites')) || []; //берем избранные фильмы из массива
    }

    const checkFavorites = () => {

        if (getFavoriteMovies().length === 0) {
            return (
                <h1>Вы пока что не добавляли никаких фильмов в избранное</h1>
            );
        } else {
            return (
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {getFavoriteMovies().map(movie => <Movie
                    title={movie.title}
                    summary={movie.summary}
                    year={movie.year}
                    poster={movie.poster}
                    id={movie.id}
                    key={movie.id + movie.id}
                    rating={movie.rating}
                />)}
            </Container>);
        }
    }

    return (
        checkFavorites()
    )
}

export default Favorites;
