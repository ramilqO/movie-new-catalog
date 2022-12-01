import { Button, Card, Container } from 'react-bootstrap';
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill} from 'react-icons/bs';

import { useState } from 'react';

function Movie({ title, summary, year, poster, rating, id}) {

  const [buttonPush, setButtonPush] = useState('');
  const [buttonDelete, setButtonDelete] = useState('d-none');
  

  const pushMovieOnStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let item = {title: title, summary: summary, year: year, poster: poster, rating: rating, id: id};
    favorites.push(item); //пушим в массив обьект фильма
    localStorage.setItem('favorites', JSON.stringify(favorites)); //превращаем массив в строку и добавляем в localStorage

    console.log(favorites);

    setButtonPush('d-none');
    setButtonDelete('d-block');
  }

  const deleteMovieFromStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    let item = favorites.find(favorite => favorite.id === id);
    let index = favorites.indexOf(item);

    favorites.splice(index, 1);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(favorites);

    setButtonPush('d-block');
    setButtonDelete('d-none');
  }

  return (
    <Card style={{ width: '250px', marginBottom: "10px", height: "80vh", cursor: "pointer" }} className={'bg-dark text-light '}>
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
          <Button variant='success' onClick={pushMovieOnStorage} className={buttonPush}><BsFillBookmarkPlusFill /></Button>
          <Button variant='danger' onClick={deleteMovieFromStorage} className={buttonDelete}><BsFillBookmarkDashFill /></Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
