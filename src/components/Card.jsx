import { Placeholder } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, summary }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title.slice(0, 30)}</Card.Title>
        <Card.Text>{summary.length > 40 ? summary.slice(0, 150) : <>
          <Placeholder as={Card.Text} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
          <Placeholder as={Card.Text} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
          <Placeholder as={Card.Text} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
        </>}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;