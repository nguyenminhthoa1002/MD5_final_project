import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormRegister from './FormRegister';
import Button from 'react-bootstrap/Button';

export default function ModalRegister() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <>
            <a onClick={() => setLgShow(true)}> Register</a>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegister></FormRegister>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}