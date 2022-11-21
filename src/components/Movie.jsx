import { Button, Card, Container } from 'react-bootstrap';
import { BsFillBookmarkStarFill } from 'react-icons/bs';

function Movie({ title, summary, year, poster, rating, id }) {

  const pushMovieOnStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; //берем массив из localStorage
    favorites.push({title: title, summary: summary, year: year, poster: poster, rating: rating, id: id}); //пушим в массив фильм
    localStorage.setItem('favorites', JSON.stringify(favorites)); //превращаем массив в строку и добавляем в localStorage

    console.log(favorites);
  }

  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer" }} className="bg-dark text-light">
      <Card.Img variant="top" src={poster} alt={title} style={{ width: "100%", minHeight: "45%", overflow: "hidden" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>
        <Card.Subtitle>{year}</Card.Subtitle>

        <Container style={{ display: 'flex', justifyContent: 'space-between', width: "100%", padding: "0", textAlign: "center" }}>
          <Button variant="primary">Смотреть</Button>
          <h3>{rating}</h3>
          <Button onClick={pushMovieOnStorage}><BsFillBookmarkStarFill /></Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
