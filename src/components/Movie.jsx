import { Button, Card, Container } from 'react-bootstrap';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import favorites from '../FavoritesData/Favorites';

function Movie({ title, summary, year, poster, rating, id }) {

  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer" }} className="bg-dark text-light">
      <Card.Img variant="top" src={poster} alt={title} style={{ width: "100%", minHeight: "50%", overflow: "hidden" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>
        <Card.Subtitle>{year}</Card.Subtitle>

        <Container style={{ display: 'flex', justifyContent: 'space-between', width: "100%", padding: "0", textAlign: "center" }}>
          <Button variant="primary">Смотреть</Button>
          <h3>{rating}</h3>
          <Button onClick={() => {favorites.push({title: title, summary: summary, year: year, poster: poster, rating: rating, id: id}); console.log(favorites);}}><BsFillBookmarkStarFill /></Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
