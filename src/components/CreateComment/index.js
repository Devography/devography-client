import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

//pass out match from language
export default function CreateComment({ match }){

const [ language, setLanaguage ] = useState(null)
const history = useHistory();

const getIndividualLanguage = async () => {
    try{
        const response = await fetch(`http:localhost:8080/languages${match.params.id}`);
        const data = response.json();
        setLanaguage(data)
    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    getIndividualLanguage();
},[])

// Modal state
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const initialFormValues={
    name:"",
    body:"",
    languageId: `${match.params.id}`
}

const [newComment, setNewComment] = useState(initialFormValues);

const _handleChange = (e) => {
    setNewComment({
            ...newComment, [e.target.id]: e.target.value}
    )
}

//Need to add a refresh in handle submit functionality.

const _handleSubmit = async(event) => {
    event.preventDefault();
    const COMM_API_ENDPOINT = `http://localhost:8080/comments`
    try{
        const response = await fetch(COMM_API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            getIndividualLanguage();
            setNewComment(initialFormValues);
            history.push(`languages/${match.params.id}`)
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
                    {/* <Button variant="primary" onClick={_handleSubmit}>
                        Save Comment
                    </Button> */}
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