import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function CreateComment({ match }){

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const initialFormValues={
    name:"",
    body:""
}

const [newComment, setNewComment] = useState(initialFormValues);

const _handleChange = (e) => {
    setNewComment({
            ...newComment, [e.target.id]: e.target.value}
    )
}

const _handleSubmit = async(event) => {
    event.preventDefault();
    const COMM_API_ENDPOINT = `https://devography.herokuapp.com/comments/${match.params.id}`
    try{
        const response = await fetch(COMM_API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            setNewComment(initialFormValues);
            window.location.reload()            
            handleClose();
        }else{
            alert("Oops, something went wrong. Try again")
        }

    }catch(err){
        console.log(err)
    }
}
    return(
        <>
        <h2 style={{textAlign:'center'}}> {"{"} Comments {"}"}</h2>
        <Button variant="outline-secondary" onClick={handleShow}>
            Add a Comment
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add a Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={_handleSubmit}>
                    <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" id="name"value={newComment.name} onChange={_handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control as="textarea" rows={3} id="body" value={newComment.body} onChange={_handleChange} required/>
                    </Form.Group>
                    <input type="submit" value="Add Comment"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}