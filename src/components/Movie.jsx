import { Button, Card, Container, Placeholder } from 'react-bootstrap';
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from 'react-icons/bs';

import { useState } from 'react';

import ModalOverlay from './Modal';

function Movie({ title, summary, year, poster, rating, id, genres, torrents, isFavorite }) {

  let [isDisabled, setIsDisabled] = useState(false);

  const pushMovieOnStorage = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({ title, summary, year, poster, rating, id, genres, torrents, isFavorite });

    let arr = [];

    favorites.map(favorite => arr.push(JSON.stringify(favorite)))
    favorites = [...new Set(arr)];
    let newArr = [];
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
    <Card style={{ width: '250px', marginBottom: "10px", cursor: "pointer", height: '500px' }} className='bg-light text-dark border border-0'>
      <Card.Img variant="top" src={poster} alt='holder.js/300x200' style={{ width: "100%", height: '340px', overflow: "hidden" }}
      />
      <Card.Body>
        <Card.Title>{title.slice(0, 18) || <Placeholder as={Card.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>}</Card.Title>

        <Card.Text className="text-muted" style={{ height: '60px' }}>
          {summary.slice(0, 70) || <>
            <Placeholder as={Card.Text} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
            <Placeholder as={Card.Text} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
          </>}
        </Card.Text>

        <Card.Subtitle>{year}</Card.Subtitle>
        <hr />
        <Container style={{ display: 'flex', justifyContent: 'space-between', width: "100%", padding: "0", textAlign: "center" }}>

          <ModalOverlay
            title={title}
            summary={summary.slice(0, 200)}
            genres={genres}
            torrents={torrents}
          />

          <h3>{rating}</h3>

          <Button       /*Button push to favorites*/
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
