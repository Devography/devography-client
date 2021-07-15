import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

//pass out match from language
export default function CreateComment(){

// Modal state
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const initialFormValues={
    name:"",
    body:""
}

const [newComment, setNewComment] = useState(initialFormValues);

const _handleChange = (e) => {
    setNewComment(prevState =>{
        return{
            ...prevState,
            [e.target.id]: e.target.value
        }
    })
}

// const _handleSubmit = async(e) => {
//     e.preventDefault();
//     try{
//         // const API_ENDPOINT = 'http://localhost/comments
//         const response = await fetch(API_ENDPOINT, {
//             method: 'POST',
//             body: JSON.stringify(newComment),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         if (response.status === 201) {
//             getCommentData();
//             setNewComment(initialFormValues)
//         }

//     }catch(err){
//         console.log(err)
//     }
// }
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
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" id="name" value={newComment.name} onChange={_handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control as="textarea" rows={3} id="name" value={newComment.body} onChange={_handleChange} required/>
                    </Form.Group>
                </Form>
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
    )
}

//button value={match.params.id} onClick={_handleSubmit}