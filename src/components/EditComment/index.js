import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

export default function EditComment({ match, getLanguages }){

    const history = useHistory()

    const [updateComment, setUpdateComment] = useState({
        name: '',
        body: ''
    })

    //Get Lanaguage URL 
    const LANG_API_ENDPOINT = `https://devography.herokuapp.com/languages/${match.params.id}`
    
    //Get comment URL
    const COMM_API_ENDPOINT = `https://devography.herokuapp.com/comments/${match.params.commentId}`

    const _handleChange = (e) => {
        setUpdateComment((prevState) =>{
            return{
                ...prevState,
                [e.target.id]: e.target.value,
            }
        })
    }

    const getCommentsData = async () =>{
        try{
            const response = await fetch(LANG_API_ENDPOINT);
            const data = await response.json();
            console.log(data.comment)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCommentsData();
        // eslint-disable-next-line
    },[])

    const _handleEdit = async (e) =>{
        e.preventDefault()
        try{
            const response = await fetch(COMM_API_ENDPOINT, {
                method: "PUT",
                body: JSON.stringify(updateComment),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(response.status === 204){
                getLanguages()
                history.push(`/languages/${match.params.id}`)
            }else{
                alert('Oops, something went wrong.')
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Edit Comment</h1>
            <Form className="edit-comment" onSubmit={_handleEdit}>
                    <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" id="name"value={updateComment.name} onChange={_handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control as="textarea" rows={3} id="body" value={updateComment.body} onChange={_handleChange} required/>
                    </Form.Group>
                    <input type="submit" value="Edit Comment"/>
            </Form>
        </div>
        
    )
}