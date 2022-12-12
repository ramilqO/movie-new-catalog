import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Header>

          <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '25vw', maxWidth: '80vw', flexWrap: 'wrap' }}> {/*genres*/}
            {genres.map((genre, index) => <h6 style={{marginRight: '15px'}} key={index}>{genre}</h6>)}
          </div>

          <div>{torrents.map((torrent, index) => <h5 key={index}>{torrent.quality}</h5>)}</div> 
          
        </Modal.Header>
        <Modal.Body>
          {summary}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          {torrents.map((torrent, index) => <Button key={index} href={torrent.url}>Скачать {torrent.quality}</Button>)}        
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOverlay;