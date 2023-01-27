import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaPlusCircle} from "react-icons/fa"
import NotesList from './NotesList';

function AddNoteModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notes, setNotes] = useState([
    {title:"note1",id:1}
  ]);


  function arrIds(){
    return notes.map(note=>note.id);
  }

  const noteText = useRef();
  const handleConfirm = ()=>{

    const newNote = {title:noteText.current.value,id: Math.max(...arrIds())+1};
    notes.push(newNote);
    setNotes(notes);
    handleClose();
  }

  const handleDelete = (id)=>{
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };


  return (
    <>
      <NotesList noteText = {notes} handleDelete={handleDelete} />

      <FaPlusCircle
        className="w-100 text-center"
        style={{
          marginBottom: "-15px",
          color: "#DFCBF7",
          fontSize: "40px",
          cursor: "pointer",
        }}
        onClick={handleShow}
      />
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className='p-2'>
          <Modal.Title className='w-100 text-center'>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea type="text" id="noteText" className='form-control' ref={noteText} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button 
            variant="outline-success" 
            onClick={() => handleConfirm()}
            >
              Understood</Button>
        </Modal.Footer>
      </Modal>

      
    </>
  );
}

export default AddNoteModal;