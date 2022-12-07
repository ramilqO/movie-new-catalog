import { Button, Card, Container } from 'react-bootstrap';
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from 'react-icons/bs';

import { useState } from 'react';

import ModalOverlay from './Modal';

function Movie({ title, summary, year, poster, rating, id, isFavorite }) {

  let [isDisabled, setIsDisabled] = useState(false);

  const pushMovieOnStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    let item = { title: title, summary: summary, year: year, poster: poster, rating: rating, id: id, isFavorite: true };
    favorites.push(item);

    let arr = [];

    favorites.map(favorite => arr.push(JSON.stringify(favorite)))
    favorites = [...new Set(arr)];
    let newArr = []
    favorites.map(favorite => newArr.push(JSON.parse(favorite)));
    favorites = newArr;

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsDisabled(true);

    console.log(favorites);
  }

  const deleteMovieFromStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    let item = favorites.find(favorite => favorite.id === id);
    let index = favorites.indexOf(item);
    favorites.splice(index, 1);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsDisabled(true);

    console.log(favorites);
  }

  return (
    <Card style={{ width: '250px', marginBottom: "10px", cursor: "pointer", height: "60%" }} className='bg-dark text-light '>
      <Card.Img variant="top" src={poster} alt={title} style={{ width: "100%", height: '35vh', overflow: "hidden" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 18)}</Card.Title>
        <Card.Text className="text-muted">
          {summary.slice(0, 70)}...
        </Card.Text>
        <Card.Subtitle>{year}</Card.Subtitle>

        <Container style={{ display: 'flex', justifyContent: 'space-between', width: "100%", padding: "0", textAlign: "center" }}>
          {/* <Button variant="primary">Смотреть</Button> */}
          <ModalOverlay 
          title={title}
          summary={summary.slice(0, 200)}
          />
          <h3>{rating}</h3>

          <Button
            variant={isFavorite ? 'danger' : 'success'}
            onClick={isFavorite ? deleteMovieFromStorage : pushMovieOnStorage}
            disabled={isDisabled}
          >
            {isFavorite ? <BsFillBookmarkDashFill /> : <BsFillBookmarkPlusFill />}
          </Button>

        </Container>
      </Card.Body>
    </Card>
  );
}

export default Movie;
