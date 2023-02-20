import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormRegister from '../../UserPages/homeComponent/FormRegister';
// import Button from 'react-bootstrap/Button';
import Iconify from '../components/iconify';
import { Button } from '@mui/material';

export default function ModalRegister() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => setLgShow(true)}>
                CREATE NEW
            </Button>
            <Modal className='form-group'
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
                    <Button variant="contained" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}