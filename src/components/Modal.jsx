import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ButtonGroup, Placeholder } from 'react-bootstrap';

function ModalOverlay({ title, summary, torrents, genres }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Смотреть
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>  {/*title*/}
          <Modal.Title>{title || <Placeholder as={Modal.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>}</Modal.Title>
        </Modal.Header>
        <Modal.Header>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}> {/*genres*/}
            {genres.map((genre, index) => <h6 style={{ marginRight: '15px' }} key={index}>{genre}</h6>)}
          </div>

        </Modal.Header>
        <Modal.Body>
          {summary ||
            <>
              <Placeholder as={Modal.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
              <Placeholder as={Modal.Title} animation='glow'><Placeholder xs={12} size='lg' /></Placeholder>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <ButtonGroup>{torrents.map((torrent, index) => <Button key={index} href={torrent.url}>{torrent.quality}</Button>)}</ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOverlay;