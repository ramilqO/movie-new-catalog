import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie({title, summary, year, poster, id}) {
  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer"}} className="bg-dark text-light">
      <Card.Img variant="top" src={poster} style={{width: "100%", minHeight: "50%", overflow: "hidden"}} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}...</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>
        <Button variant="primary">Смотреть</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
