import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const NewModal = (props) => {
  return (
    <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>

        <Button variant="primary"

          variant="contained"
          endIcon={<SaveIcon />}
          onClick={props.onSubmit}>
          Save Changes
        </Button>


      </Modal.Footer>
    </Modal>
  )
}

export default NewModal
