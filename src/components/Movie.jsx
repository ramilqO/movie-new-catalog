import { Button, Card, Container } from 'react-bootstrap';
import {BsFillBookmarkStarFill, BsImageFill} from 'react-icons/bs';

function Movie({ title, summary, year, poster, id }) {
  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer" }} className="bg-dark text-light">
      <Card.Img variant="top" src={poster} alt={<BsImageFill />} style={{ width: "100%", minHeight: "50%", overflow: "hidden" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>

        <Container style={{display: 'flex', justifyContent: 'space-between', width: "100%", padding : "0", textAlign: "center"}}>
          <Button variant="primary">Смотреть</Button>
          <Button><BsFillBookmarkStarFill /></Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
