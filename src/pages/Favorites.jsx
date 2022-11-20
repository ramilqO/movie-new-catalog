import Movie from '../components/Movie';
import favorites from '../FavoritesData/Favorites';

import { Container } from 'react-bootstrap';



const Favorites = () => {

    const checkFavorites = () => {
        if (favorites.length == 0) {
            return (
                <h1>Вы пока что не добавляли никаких фильмов в избранное</h1>
            );
        } else {
            return (
            <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {favorites.map(movie => <Movie
                    title={movie.title}
                    summary={movie.summary}
                    year={movie.year}
                    poster={movie.large_cover_image}
                    id={movie.id}
                    key={movie.id + 1}
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
