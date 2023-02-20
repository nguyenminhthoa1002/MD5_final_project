import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormLogin from './FormLogin';

export default function ModalLogin() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <a key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Log in
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </a>
      ))}
      <Modal show={show}  onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-login'>
            <FormLogin></FormLogin> 
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}