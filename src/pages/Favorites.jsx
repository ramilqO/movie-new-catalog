import favorites from '../FavoritesData/Favorites';
import Movie from '../components/Movie';

const Favorites = () => {
    return (
        <div>
            {favorites.map(movie => <Movie
            title={movie.title}
            summary={movie.summary}
            year={movie.year}
            poster={movie.large_cover_image}
            id={movie.id}
            key={movie.id + 1}
            rating={movie.rating}
            />)}
        </div>
    );
}

export default Favorites;
