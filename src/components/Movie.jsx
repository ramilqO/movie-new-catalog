import { Button, Card, Container } from 'react-bootstrap';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {BiImageAlt} from 'react-icons/bi'
function Movie({ title, summary, year, poster, id, rating }) {
  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer" }} className="bg-dark text-light">
      <Card.Img variant="top" src={poster} alt={<BiImageAlt />} style={{ width: "100%", minHeight: "50%", overflow: "hidden" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>
        <Card.Subtitle>{year}</Card.Subtitle>

        <Container style={{display: 'flex', justifyContent: 'space-between', width: "100%", padding : "0", textAlign: "center"}}>
          <Button variant="primary">Смотреть</Button>
          <h3>{rating}</h3>
          <Button><BsFillBookmarkStarFill /></Button>
          
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
