import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Comments(){

    //API call to post comments - will need to pass out match props to get lanaguage ID and pass it to req.body

    const sampleCommentData=[
        {
            name: 'Trieu',
            body: 'JavaScript is amazing!!'
        },
        {
            name: 'Sammy',
            body: 'I rated this app 10 out of 10, will come back again!'
        }

    ]

    //function to handle delete

    return(
        <Container>
        {sampleCommentData.map((comment, i) => {
                return(
                    <div>
                        <div className='comment-items' key={i}>
                            <p><span style={{color:'blue'}}>{comment.name}</span>: {comment.body}</p>     
                        </div>
                        <div>
                            <Button variant="outline-secondary"> 
                            <Link style={{
                                textDecoration:'none',
                                color:'rgb(97, 106, 113)'
                                }} to={`/`}>EDIT</Link>
                            </Button>
                            <Button variant="secondary">
                                DELETE
                            </Button>
                        </div>
                        
                    </div>
                )
        })}
        </Container>
    )
}

// Link to={`/comments/${comment._id}/edit`}